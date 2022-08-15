import React from "react";
import ComicsHeader from "../components/comicsHeader";
import ComicsList from "../components/comicsList/ComicsList";
import {Helmet} from "react-helmet";

const Comics = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Page with list of comics"
        />
        <title>Comics page</title>
      </Helmet>
      <ComicsHeader/>
      <ComicsList/>
    </>
  )
}

export default Comics;