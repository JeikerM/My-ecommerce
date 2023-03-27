import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import  {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar"


function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
       <ItemListContainer greeting ="Bienvenidos a mi Ecommerce"/>
      </header>
    </div>
  );
}

export default App;
