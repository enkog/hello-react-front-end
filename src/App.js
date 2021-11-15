import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;