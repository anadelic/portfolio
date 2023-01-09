import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Hi, I am Ana. I used to be a lawyer but I fell in love with coding
              and I am on my way learning it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
