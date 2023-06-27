import { Typography, Button } from "@mui/material";

function ContactList({ contacts, filter, deleteContact }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Typography marginTop="20px" variant="h3" contacts={contacts}>
      Contacts
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              onClick={() => deleteContact(contact.id)}
              style={{ margin: "20px" }}
              variant="contained"
              size="small">
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </Typography>
  );
}

export default ContactList;
