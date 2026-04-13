import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import CardSection from './components/CardSection';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Banner2 />
      <CardSection />
      <Footer />
    </div>
  );
};

export default page;