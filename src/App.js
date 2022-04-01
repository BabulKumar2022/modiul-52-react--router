
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Header from './components/Hreader/Header';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
