import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";

import {Main, Comics, Page404} from "./pages";
import SingleComicPage from "./pages/SingleComic";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/comics" element={<Comics/>} />
            <Route path="/comics">
              <Route path=":comicId" element={<SingleComicPage/>} />
            </Route>
            <Route path="*" element={<Page404/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
