import React from 'react';
import {
  Row,
  Col,
  Image,
  Label,
  PageHeader
} from 'react-bootstrap';
import UserInfo from '../../../components/UserInfo';

const MovieInfo = () => (
  <div className="movies-info">
    <Row>
      <Col xs={12} sm={12} md={3} lg={3}>
        <Image
          src="http://www.impawards.com/2017/posters/lego_batman_movie_ver2.jpg" thumbnail responsive />
        <Label bsStyle="success">AVAILABLE</Label>
      </Col>
      <Col xs={12} sm={12} md={9} lg={9}>
        <PageHeader>The LEGO Batman Movie <small><Label>2017</Label></small></PageHeader>
        <h3>
          <Label>Action</Label>
          <Label>Adventure</Label>
          <Label>Animation</Label>
          <Label>Comedy</Label>
          <Label>Family</Label>
          <Label>Fantasy</Label>
        </h3>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2>Director</h2>
          <div>
            <UserInfo name="Chris McKay" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2>Cast</h2>
          <div>
            <UserInfo name="Rosario Dawson" sub="Batgirl | Barbara Gordon" />
            <UserInfo name="Channing Tatum" sub="Superman" />
            <UserInfo name="Ralph Fiennesn" sub="Alfred Pennyworth" />
            <UserInfo name="Zoë Kravitz" sub="Catwoman" />
          </div>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="details">
        <h3>Synopsis</h3>
        <p>There are big changes brewing in Gotham City, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.</p>
      </Col>
    </Row>
  </div>
)

export default MovieInfo;