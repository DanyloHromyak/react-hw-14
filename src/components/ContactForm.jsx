import { useState } from "react";
import { Paper, Stack, TextField, Button } from "@mui/material";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <Paper
      elevation={5}
      sx={{
        p: "18px",
      }}>
      <Stack
        direction="column"
        gap="8px"
        alignItems="streched"
        component="form"
        onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={name}
          name="name"
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
        <TextField
          value={number}
          label="Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          variant="outlined"
          required
          onChange={e => setNumber(e.target.value)}
          type="tel"
        />
        <Button variant="contained" color="primary" type="submit">
          Add new contact
        </Button>
      </Stack>
    </Paper>
  );
}
export default ContactForm;
