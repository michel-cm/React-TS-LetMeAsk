import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

type Exact = {
  exact: boolean;
}

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rooms/new" element={<NewRoom />}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
