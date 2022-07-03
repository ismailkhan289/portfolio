import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Menu from "./components/Menu"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
     <BrowserRouter>
     <Menu />
     <Routes>

     <Route path='/' element={<Homepage />}>
      </Route>

      <Route path='/projects' element={<Projects />}>
      </Route>

      <Route path='/contact-me' element={<Contact />}>
      </Route>

      <Route path='*' element={<Error />}>
      </Route>

      </Routes>
     </BrowserRouter>
  );
}

export default App;
