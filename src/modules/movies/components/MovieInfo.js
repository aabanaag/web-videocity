import React from 'react';
import {
  Row,
  Col,
  Image,
  Label,
  PageHeader,
  Panel,
  Button
} from 'react-bootstrap';
import { isEmpty, result } from 'lodash';
import UserInfo from '../../../components/UserInfo';

const MovieInfo = ({ movie, rentMovie }) => {
  const renderStatus = () => {
    return (
      <Label bsStyle="info" className="text-uppercase">{result(movie, 'status', '')}</Label>
    )
  }

  const renderCast = () => {
    const cast = result(movie, 'cast', '');

    if (cast && cast.length !== 0) {
      return cast.map((obj, i) => (
        <UserInfo key={i} name={obj.name} sub={obj.role} />
      ));
    } else return null;
  }

  const renderGenre = () => {
    const genre = result(movie, 'genre', '');

    if (genre && genre.length !== 0) {
      return genre.map((obj, i) => (
        <Label key={i}>{obj}</Label>
      )); 
    } else return null;
  }

  return (
    <div className="movies-info">
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Image
            src={result(movie, 'poster', '')} thumbnail responsive />
          
          <Button
            bsStyle="success" block
            onClick={i => { rentMovie(movie._id)}}>Rent</Button>
        </Col>
        <Col xs={12} sm={12} md={9} lg={9}>
          <PageHeader>{result(movie, 'title', '')} <small><Label bsStyle="warning">{result(movie, 'year', '')}</Label>{ renderStatus() }</small></PageHeader>
          <h3>{ renderGenre() }</h3>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Director</h2>
            <div>
              <UserInfo name={result(movie, 'director', '')} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2>Cast</h2>
            <div>{ renderCast() }</div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="details">
          <h3>Synopsis</h3>
          <p>{result(movie, 'plot', '')}</p>
        </Col>
      </Row>
    </div>
  )
}

export default MovieInfo;