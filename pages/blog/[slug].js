/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import { db } from "../../config/FirebaseConfig";
import Head from "next/head";
import isFacebookInAppBrowser from "detect-facebook-in-app-browser";
// import { getDocs, collection, where, query } from 'firebase/firestore'
import { collection, query, where, getDocs } from "firebase/firestore";

const Blogpost = ({ postItem }) => {
  return (
    <>
      <Head>
        <title>{postItem.title}</title>
        <meta property="og:title" content={postItem.title} />
      </Head>
      <div className={styles.mainContainer}>
        <div
          className={`container d-flex flex-column gap-4 ${styles.blogPostContainer} `}
        >
          <img src={postItem.postImage} className="img-fluid" alt="thumbnail" />
          <span className={styles.pHeading}>{postItem.title}</span>
          <div className="gap-4 d-flex flex-column">
            <p dangerouslySetInnerHTML={{ __html: postItem.content }}></p>
            <p>{postItem.slug}</p>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const page = JSON.stringify(ctx.query);
  console.log(page);
  let postItem = {};

  try {
    const slugQuery = collection(db, "posts");
    const q = query(slugQuery, where("slug", "==", ctx.query.slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      postItem = doc.data();
      console.log(doc.id, " => ", doc.data());
    });
  } catch (excep) {
    console.log(excep);
  }
  const isFacebookInAppBrowser = () =>
    /FB_IAB/.test(navigator.userAgent) ||
    /FBAN/.test(navigator.userAgent) ||
    /FBAV/.test(navigator.userAgent);
  if (isFacebookInAppBrowser()) {
    console.log("yes");
    return {
      redirect: {
        source: "/",
        destination: postItem.redirect,
        permanent: false,
        basePath: false,
      },
    };
  }
  const meta = {
    description: "",
    title: postItem.title,
  };

  return {
    props: { refer: ctx.req.headers, postItem },
  };
};

export default Blogpost;