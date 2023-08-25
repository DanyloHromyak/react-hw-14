import axios from "axios";

export const getAllContactsService = () =>
  axios.get("/contacts").then(res => res.data);

export const createContactService = (name, number) =>
  axios.post("/contacts", { name, number }).then(res => res.data);

export const updateContactService = (id, name, number) =>
  axios.patch(`/contacts/${id}`, { name, number }).then(res => res.data);
