import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Neo Trading Platform</title>
          <meta property="og:title" content="Neo Trading Platfor" />
        </Head>
        <a
          href="https://nlpl1.chuimain.online/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <img alt="image" src="/Nlbutton.jpg" className="home-image" />
        </a>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            width: 310px;
            height: 410px;
            object-fit: cover;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Home
