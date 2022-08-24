import Link from 'next/link'
import React from 'react'
import classes from './PostItem.module.css'
import Image from 'next/image'

const PostItem = ({post}) => {
    const {title, image, excerpt, date, slug} = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const imagePath = `/images/posts/${slug}/${image}`
    // const imagePath = "/images/posts/getting-started-nextjs/getting-started-nextjs.png";
   const linkPath =`/posts/${slug}`

  return (
   <li className={classes.post}>
    <Link href={linkPath}>
        <a>
            <div className={classes.image}>
                <Image src={imagePath} alt="ss" width={300} height={200} layout='responsive' />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </a>
    </Link>
   </li>
  )
}

export default PostItem