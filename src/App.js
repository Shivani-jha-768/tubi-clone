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

     <hr className="solid"/>
      <Row
        isLargeRow
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <hr className="solid"/>

      <Row isLargeRow title="Trending now" fetchUrl={requests.fetchTrending} />
      <hr className="solid"/>
      <Row isLargeRow title="Top Rated" fetchUrl={requests.fetchTrending} />
      <hr className="solid"/>
      <Row isLargeRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <hr className="solid"/>
      <Row isLargeRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <hr className="solid"/>
      <Row isLargeRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <hr className="solid"/>
      <Row isLargeRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <hr className="solid"/>
      <Row isLargeRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <hr className="solid"/>
      <Footer/>
      <hr className="solid"/>

    </div>
  );
}

export default App;
