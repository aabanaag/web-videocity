import React, { Component } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import MovieInfo from '../components/MovieInfo';

class MoviePage extends Component {
  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MovieInfo />
        </Col>
      </Row>
    )
  }
}

export default MoviePage;