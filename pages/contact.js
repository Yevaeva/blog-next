import Head from "next/head";
import React from "react";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me message"/>
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
