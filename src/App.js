
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSingle from './pages/RecipeSingle';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/singleRecipe' element={<RecipeSingle/>}/>
          
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
