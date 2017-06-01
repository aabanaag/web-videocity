import React, { Component } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MoviesList />
        </Col>
      </Row>
    )
  }
}

export default MoviesPage;