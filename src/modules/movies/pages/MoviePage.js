import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'react-bootstrap';
import MovieInfo from '../components/MovieInfo';
class MoviePage extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  render() {
    return (
      <Row className="movies-page">
        <Col xs={12}>
          <MovieInfo movie={this.props.movie} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movies.movies.find(m => m._id === ownProps.params.id)
});

export default connect(mapStateToProps, null)(MovieInfo);