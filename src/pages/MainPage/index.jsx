import React from 'react';
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import requests from '../../api/requests';

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title="Netflix Original"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movides"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movides"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}
