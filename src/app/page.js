import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import CardSection from './components/CardSection';
import { ContactProvider } from './context/ContactContext';


const page = () => {
  return (
    <>
    <Banner />
    <ContactProvider>
      <Banner2 />
      <CardSection />
    </ContactProvider>
    </>
  );
};

export default page;