import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index"

function NewProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [inventoryDate, setInventoryDate] = useState('');
  const dispatch = useDispatch();
  const { addProduct } = bindActionCreators(actionCreators, dispatch)
  //console.log(AC);
  const onButtonPress = () => {

    addProduct({name: name, description: description, price: price, inventoryDate: inventoryDate })

  }

  return (
    <div>
      <TextField id="standard-basic" label="Name" onChange={(e) => {console.log(e.target.value); setName(e.target.value)}}/>
      <TextField id="standard-basic" label="Desciption" onChange={(e) => {console.log(e.target.value); setDescription(e.target.value)}} />
      <TextField id="standard-basic" label="Price" onChange={(e) => {console.log(e.target.value); setPrice(e.target.value)}} />
      <TextField id="standard-basic" label="Inventory Date" onChange={(e) => {console.log(e.target.value); setInventoryDate(e.target.value)}}/>
      <Button variant="contained" color="primary" onClick={onButtonPress}>
        Submit
      </Button>
    </div>
  );
}

export default NewProduct;
