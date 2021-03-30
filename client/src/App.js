import logo from './logo.svg';
import './App.css';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";

function App() {
  return (
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" >

          </Typography>
          <Button color="inherit">Войти</Button>
          <Button color="inherit">Регистрация</Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
