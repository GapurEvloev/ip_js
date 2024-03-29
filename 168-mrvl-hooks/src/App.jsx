import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";
import Spinner from "./components/spinner/Spinner";

const Main = lazy(() => import("./pages/Main"));
const Comics = lazy(() => import("./pages/Comics"));
const SingleChar = lazy(() => import("./components/singleChar/singleChar"));
const SingleComic = lazy(() => import("./components/singleComic/SingleComic"));

const SinglePage = lazy(() => import("./pages/SinglePage"));
const Page404 = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/comics" element={<Comics/>} />
              <Route path="/comics">
                <Route path=":id" element={<SinglePage Component={SingleComic} dataType="comic"/>} />
              </Route>
              <Route path="/characters">
                <Route path=":id" element={<SinglePage Component={SingleChar} dataType="character"/>} />
              </Route>
              <Route path="*" element={<Page404/>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
