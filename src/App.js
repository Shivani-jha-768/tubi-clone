/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from './Nav';
import Footer from './Footer'

function App() {
  return (
    <div className="app">
    <Nav />
    {/*Nav */}
    <Banner />
    {/*banner*/}

      <Row
        isLargeRow
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row isLargeRow title="Trending" fetchUrl={requests.fetchTrending} />
      <Row isLargeRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row isLargeRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row isLargeRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row isLargeRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row isLargeRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row isLargeRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>

    </div>
  );
}

export default App;
