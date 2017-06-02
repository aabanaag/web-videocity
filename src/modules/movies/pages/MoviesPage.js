import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'react-bootstrap';
import Search from '../../../components/Search';
import MoviesList from '../components/MoviesList';

import {
  getMovies,
  findMovie
} from '../actions/moviesAction';

class MoviesPage extends Component {
  static propTypes = {
    getMovies: PropTypes.func,
    findMovie: PropTypes.func,
    movies: PropTypes.array
  }

  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <Search search={this.props.findMovie} />
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
  getMovies: bindActionCreators(getMovies, dispatch),
  findMovie: bindActionCreators(findMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);