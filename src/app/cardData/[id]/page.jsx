"use client";
import Section2 from '@/app/components/Section2';
import { useContact } from '@/app/context/ContactContext';
import { useParams } from 'next/navigation';
import React from 'react';

const CardIdPage = () => {
  const { id } = useParams()
  const {contacts} = useContact()

  const contact = contacts.find(
    (c) => c.id === Number(id)
  );

  if (!contact) return <p>Not Found</p>;
  return (
    <div>
      <Section2 props={contact}/>
    </div>
  );
};

export default CardIdPage;