import React from 'react';
import {
  Row,
  Col,
  Image,
  Label,
  PageHeader
} from 'react-bootstrap';
import UserInfo from '../../../components/UserInfo';

const MovieInfo = ({ movie }) => {
  const renderStatus = () => {
    return (
      <Label bsStyle="danger">{movie.status}</Label>
    )
  }

  const renderCast = () => {
    const { cast } = movie;

    return cast.map((name, i) => (
      <UserInfo key={i} name={name} />
    ));
  }

  return (
    <div className="movies-info">
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Image
            src={movie.img} thumbnail responsive />
          { renderStatus() }
        </Col>
        <Col xs={12} sm={12} md={9} lg={9}>
          <PageHeader>{movie.title} <small><Label>{movie.year}</Label></small></PageHeader>
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
              <UserInfo name={movie.director} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Cast</h2>
            <div>
              { renderCast() }
            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="details">
          <h3>Synopsis</h3>
          <p>{movie.synopsis}</p>
        </Col>
      </Row>
    </div>
  )
}

export default MovieInfo;