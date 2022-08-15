import {useState} from "react";
import { Helmet } from "react-helmet";

import ErrorBoundary from "../components/errorBoundary/errorBoundary";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from "../resources/img/vision.png";
import CharSearchForm from "../components/charSearchForm/CharSearchForm";

const Main = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onSelectChar = (id) => {
    setSelectedChar(id);
  }
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Marvel information portal"
        />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList selectedChar={selectedChar} onSelectChar={onSelectChar} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm/>
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default Main;