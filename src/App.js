import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import New from "./Pages/New";
import Index from './Pages/Index'
import ShowIndex from './Pages/ShowIndex'
import Edit from './Pages/Edit'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />}/>
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<ShowIndex />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
