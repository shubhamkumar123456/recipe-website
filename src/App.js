
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSingle from './pages/RecipeSingle';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div style={{height:"100px"}}>
     <Navbar/>
     </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/singleRecipe' element={<RecipeSingle/>}/>
          
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
