import React from 'react';
import { Link } from 'react-router';
import {
  Image,
  Label,
  Col
} from 'react-bootstrap';

const Tile = () => (
  <Col xs={6} sm={4} md={4} lg={2} className="tile-component">
    <Link to="/the-lego-batman-movie">
      <Image
        src="http://www.impawards.com/2017/posters/lego_batman_movie_ver2.jpg" thumbnail responsive>
      </Image>
      <h5>The LEGO Batman Movie</h5>
      <span className="hidden-xs">
        <Label>2017</Label>
        <Label bsStyle="danger">Not Available</Label>
      </span>
    </Link>
  </Col>
)

export default Tile;