import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs aria-label="tabs">
          <Tab label="Products" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
