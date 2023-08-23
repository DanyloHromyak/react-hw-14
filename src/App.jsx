import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm.jsx";
import ContactsList from "./components/ContactList.jsx";
import Filter from "./components/Filter.jsx";

import {
  getAllContactsService,
  createContactService,
  updateContactService,
  removeContactService,
} from "./services/contactsServices";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllContactsService()
      .then(contacts => setContacts(contacts))
      .catch(error => console.log(error));
  }, []);

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

    createContactService(newContact).then(newContact =>
      setContacts(prevContacts => [newContact, ...prevContacts])
    );
  }

  function updateContact(id, name, number) {
    updateContactService(id, name, number)
      .then(updatedContact => {
        setContacts(prevContacts =>
          prevContacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
          )
        );
      })
      .catch(error => console.log(error));
  }

  function deleteContact(id) {
    removeContactService(id)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.log(error));
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
