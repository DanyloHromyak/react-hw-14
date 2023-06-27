import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm.jsx";
import ContactsList from "./components/ContactList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [contacts, setContacts] = useState(initContactsState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function initContactsState() {
    const contactsLocalStorage = localStorage.getItem("contacts");
    if (contactsLocalStorage) {
      return JSON.parse(contactsLocalStorage);
    } else {
      return [];
    }
  }

  function deleteContact(id) {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }

  function addContact(name, number) {
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isDuplicateName) {
      return true;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    return false;
  }

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
