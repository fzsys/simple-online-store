import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
      // <div>
      //     test
      // </div>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;