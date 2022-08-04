import AppHeader from "../components/appHeader/AppHeader";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from "../resources/img/vision.png";
import {useState} from "react";
import ErrorBoundary from "../components/errorBoundary/errorBoundary";
import Comics from "./Comics";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onSelectChar = (id) => {
    setSelectedChar(id);
  }

  return (
    <div className="app">
      <AppHeader />
      <main>
        {/*<ErrorBoundary>*/}
        {/*  <RandomChar />*/}
        {/*</ErrorBoundary>*/}
        {/*<div className="char__content">*/}
        {/*  <ErrorBoundary>*/}
        {/*    <CharList selectedChar={selectedChar} onSelectChar={onSelectChar} />*/}
        {/*  </ErrorBoundary>*/}
        {/*  <ErrorBoundary>*/}
        {/*    <CharInfo charId={selectedChar}/>*/}
        {/*  </ErrorBoundary>*/}
        {/*</div>*/}
        {/*<img className="bg-decoration" src={decoration} alt="vision" />*/}
        <Comics/>
      </main>
    </div>
  );
};

export default App;
