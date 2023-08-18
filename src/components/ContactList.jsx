import { Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

function ContactList({ contacts, filter, deleteContact }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Typography marginTop="20px" variant="h3" contacts={contacts}>
      Contacts
      <ul>
        <AnimatePresence>
          {filteredContacts.map(contact => (
            <motion.li
              key={contact.id}
              initial={{
                opacity: 0,
                translateX: "100%",
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              exit={{
                opacity: 0,
                translateX: "100%",
              }}
              transition={{
                duration: 0.5,
              }}>
              {contact.name}: {contact.number}
              <Button
                onClick={() => deleteContact(contact.id)}
                style={{ margin: "20px" }}
                variant="contained"
                size="small">
                Remove
              </Button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Typography>
  );
}

export default ContactList;
