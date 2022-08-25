import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PlantCategories from '../Plants/PlantCategories';


function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/plant-categories' element={<PlantCategories/>}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
