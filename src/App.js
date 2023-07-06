import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Error404 from './pages/Error404';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
