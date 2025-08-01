import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import data from '../data/data.json';
import  Head  from 'next/head';
import '../styles/globals.css'; // Make sure this path is correct

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Add viewport meta here */}
        <title>Rahul Ojha | Software Engineer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Highly skilled Software Developer with 4+ years of experience in Spring Boot, Java, Python, databases (SQL & NoSQL), Git, version control, web development (HTML, CSS, JavaScript), Linux, Docker, and Kubernetes. Looking for challenging opportunities to leverage expertise and build innovative solutions."
        />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="content-language" content="en" />
        <meta
          name="keywords"
          content="Rahul Ojha, software engineer, portfolio, Java Springboot Developer, Java developer, backend developer, cloud engineer, Bengaluru"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Rahul Ojha | Software Engineer" />
        <meta property="og:description" content="Welcome to the professional portfolio of Rahul Ojha, showcasing skills in backend development, cloud technologies, and more." />
        <meta property="og:image" content="https://rahulojha.in/img/profile.6fc84af9.jpeg" />
        <meta property="og:url" content="https://rahulojha.in" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rahul Ojha | Software Engineer" />
        <meta name="twitter:description" content="Explore the projects and achievements of Rahul Ojha, a professional software engineer with a focus on backend development and cloud technologies." />
        <meta name="twitter:image" content="https://rahulojha.in/img/profile.6fc84af9.jpeg" />
        <meta name="author" content="Rahul Ojha" />
        {/* Favicon & Manifest */}
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        {/* Canonical */}
        <link rel="canonical" href="https://rahulojha.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider colorSchemes={data.colorSchemes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  );
}
