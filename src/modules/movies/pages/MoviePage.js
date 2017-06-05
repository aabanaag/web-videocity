import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { object, string, func } from 'prop-types';
import {
  Row,
  Col
} from 'react-bootstrap';
import MovieInfo from '../components/MovieInfo';

import { getMovie, rentMovie } from '../actions/moviesAction';
class MoviePage extends Component {
  static propTypes = {
    movie: object,
    id: string,
    rentMovie: func
  }
  
  componentWillMount() {
    this.props.getMovie(this.props.id);
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MovieInfo
            movie={this.props.movie}
            rentMovie={this.props.rentMovie} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movies.movie,
  id: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: bindActionCreators(getMovie, dispatch),
  rentMovie: bindActionCreators(rentMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);