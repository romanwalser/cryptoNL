import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Polish Communal News</title>
          <meta property="og:title" content="Polish Communal News />
        </Head>
        <a
          href="https://plbaltic2.chuimain.online/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <img alt="image" src="/polbt-400w.jpg" className="home-image" />
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
