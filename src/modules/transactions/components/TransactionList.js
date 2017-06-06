import React from 'react';
import {
  Table,
  Button,
  Label
} from 'react-bootstrap';
import { result } from 'lodash';
import moment from 'moment';

const TransactionList = ({ transactions, movies, returnMovie }) => {
  const findMovieTitle = (id) => {
    const movie = movies.find(m => m._id === id);
    console.log(movie);
    return result(movie, 'title', '');
  }

  const renderTransactions = () => {
    const format = 'MMMM DD,YYYY';
    return transactions.map(tx => (
      <tr key={tx._id}>
        <td>{tx._id}</td>
        <td>{findMovieTitle(tx.movieId)}</td>
        <td>{ moment(tx.dueDate).format(format) }</td>
        <td>{ moment(tx.createdAt).format(format) }</td>
        <td>
          <Label bsStyle="danger" className="text-uppercase">{tx.status}</Label>
        </td>
        <td>
          <Button
            bsStyle="info"
            onClick={() => { returnMovie(tx._id, tx.movieId) }}>
            Return Movie
          </Button>
        </td>
      </tr>
    ))
  }
  return (
    <div className="transaction-list-component">
      <Table responsive striped>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { renderTransactions() }
        </tbody>
      </Table>
    </div>
  )
}

export default TransactionList;