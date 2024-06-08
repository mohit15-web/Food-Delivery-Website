import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import { Footer } from './components/Footer';

const App = () => {

    return (
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </div>
    );
};

export default App;
