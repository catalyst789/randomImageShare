"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ShareButtons from "./ShareButton";
import Head from "next/head";

const Page = () => {
  const [currRandomImage, setCurrRandomImage] = useState<string>();


  useEffect(() => {
    fetch("https://loremflickr.com/320/240")
      .then((res) => {
        console.log("Sucess: ", res.url);
        setCurrRandomImage(res.url);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className={styles.imageBgDiv}>
      {currRandomImage && (
        <>
          <Image height={300} width={300} src={currRandomImage} alt="random" />
          <div className={styles.shareOptions}>
            <ShareButtons imageUrl={currRandomImage} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
