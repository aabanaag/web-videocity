import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'react-bootstrap';
import MoviesList from '../components/MoviesList';

import {
  getMovies
} from '../actions/moviesAction';

class MoviesPage extends Component {
  static propTypes = {
    getMovies: PropTypes.func,
    movies: PropTypes.array
  }

  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MoviesList movies={this.props.movies} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: bindActionCreators(getMovies, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);