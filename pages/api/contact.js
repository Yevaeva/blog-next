import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = { email, name, message };
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.72ssb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(450).json({ message: "Could not connect" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      console.log(error);
      client.close();
      res.status(500).json({ message: "Failed" });
      return;
    }
    client.close();

    res.status(201).json({ message: "success", message: newMessage });
  }
}
export default handler;
