import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/itemCount';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
​
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="item/:id" element={<ItemListContainer />} />
          <Route path="about" element={<About />} />
        </Routes>
        <ItemListContainer />
        <ItemCount stock={5} initial={1} />
      </BrowserRouter>
    </div>
  );
}
export default App