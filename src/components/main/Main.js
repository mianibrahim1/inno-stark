import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './Main.css';
function Main() {
    const state = useSelector(state => state);
    console.log(state);
  return (
    <Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
>
       {state.products.products.map((item) => <div className="product">   
        <div>{item.name}</div>
        <div>{item.description}</div>
        <div>{item.price}</div>
        <div>{item.inventoryDate}</div>
       </div>)}
    </Grid>
  );
}

export default Main;