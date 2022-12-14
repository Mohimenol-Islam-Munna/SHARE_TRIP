import React from "react";
import Head from "next/head";

const Title = ({ children, pageFavicon }) => {
  return (
    <div>
      <Head>
        <title>{children}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Title;
