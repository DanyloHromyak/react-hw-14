import { TextField } from "@mui/material";

function Filter({ filter, setFilter }) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      margin="normal"
      type="text"
      label="Search"
      value={filter}
      onChange={e => setFilter(e.target.value)}
      placeholder="Contacts search"
    />
  );
}
export default Filter;
