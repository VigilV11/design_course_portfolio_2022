import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// ALL PAGE COMPONENTS
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import ClientsSection from '../components/ClientsSection';
import HireSection from '../components/HireSection';

const Home: NextPage = () => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    // <div className="bg-body text-white font-poppins pb-12">
    <div className="text-white font-poppins pb-12  container-utils">
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <WorkSection />
      <ClientsSection />
      <HireSection />
    </div>
  );
};

export default Home;
