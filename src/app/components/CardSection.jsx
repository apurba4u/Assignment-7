'use client'
import { useContact } from '../context/ContactContext';
import Card from './Card';

const CardSection = () => {
  const { contacts } = useContact();
  
  return (
    <div className='my-9 mx-auto'>
      <h2 className='text-xl font-bold text-left my-3.5'>Your Friends</h2>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-6'>
        {contacts.map(contact => <Card key={contact.id} props={contact}/>)}
      </div>
    </div>
  );
};

export default CardSection;