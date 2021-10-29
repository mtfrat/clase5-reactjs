import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'

function App() {

  let stock = 10
  let inicial = 1

  return (
    <div className="App">
      <NavBar />
      <ItemCount stock = {stock} initial = {inicial}/>
    </div>
  );
}

export default App;
