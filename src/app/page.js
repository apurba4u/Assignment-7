import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

const page = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Banner2 />
      <CardSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default page;