import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm.jsx";
import ContactsList from "./components/ContactList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  function createContact() {
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  }
  function removeContact() {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    createContact();
  }
  function filterContacts() {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.includes(filter);
    });
    return filteredContacts;
  }

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm addContact={1} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={1}
      />
    </Container>
  );
}

export default App;
