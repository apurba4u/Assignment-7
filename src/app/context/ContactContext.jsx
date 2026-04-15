"use client";

import { createContext, useContext } from "react";
import data from "../../../public/data.json";

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

const getStats = (contacts) => {
  return contacts.reduce(
    (acc, cur) => {
      acc.total++;
      acc[cur.status]++;
      return acc;
    },
    { total: 0, overdue: 0, "almost due": 0, "on-track": 0 }
  );
};

export const ContactProvider = ({ children }) => {
  const contacts = data.contacts;
  const stats = getStats(contacts);

  return (
    <ContactContext.Provider value={{ contacts, stats }}>
      {children}
    </ContactContext.Provider>
  );
};