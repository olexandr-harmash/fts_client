import './App.css';
import './index.css';
import './utils/console/dropConsole';

import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/routerConfig";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
