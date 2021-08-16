import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";
import Main from "./components/main/Main";
import NewProduct from "./components/newProduct/NewProduct";
function App() {
  return (
    <div>
      <AppBar position="static">
        <Tabs aria-label="tabs">
          <Tab label="Products" />
        </Tabs>
      </AppBar>
     <Main/>
     <NewProduct></NewProduct>
    </div>
  );
}

export default App;
