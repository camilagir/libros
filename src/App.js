
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/itemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
