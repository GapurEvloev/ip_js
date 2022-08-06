import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";

import {Main, Comics} from "./pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/comics" element={<Comics/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
