import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
function NewProduct() {
  return (
    <div>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Desciption" />
      <TextField id="standard-basic" label="Price" />
      <TextField id="standard-basic" label="Inventory Date" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default NewProduct;
