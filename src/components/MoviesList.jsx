import React, { useState, useEffect } from 'react';
import data from '../data/movies.json';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { matchSorter } from 'match-sorter';

const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  },[])

  return (
    <div>
      <ReactTable
        data={movies}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={[
          {
            Header: "Title",
            headerStyle: {textAlign: 'left'},
            accessor: "title",
            width: 300,
            filterable: true,
            Filter: ({filter, onChange}) => (
              <input type='text'
                     placeholder="Filter by title"
                     value={filter ? filter.value : ''}
                     onChange={event => onChange(event.target.value)} />
            ),
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["title"] }),
            filterAll: true
          },
          {
            Header: "Year",
            headerStyle: {textAlign: 'left'},
            accessor: "year",
            maxWidth: 150
          },
          {
            Header: "Runtime",
            headerStyle: {textAlign: 'left'},
            accessor: "runtime",
            maxWidth: 150,
            Cell: row => (
              row.value ? <span>{Math.floor(row.value / 60)}h {row.value % 60}min</span> : '-'
            )
          },
          {
            Header: "Revenue",
            headerStyle: {textAlign: 'left'},
            accessor: "revenue",
            maxWidth: 150,
            Cell: row => (
              row.value ? <span>${row.value} M</span> : '-'
            )
          },
          {
            Header: "Rating",
            headerStyle: {textAlign: 'left'},
            accessor: "rating",
            maxWidth: 150
          },
          {
            Header: "Genres",
            headerStyle: {textAlign: 'left'},
            accessor: "genre",
            width: 300,
            filterable: true,
            Cell: row => (
              row.value ? <span>{(row.value).join(", ")}</span> : '-'
            ),
            Filter: ({filter, onChange}) => (
              <select onChange={event => onChange(event.target.value)}
                      style={{ width: "55%" }}
                      value={filter ? filter.value : "all"}>
                      <option value="all">All</option>
                      <option value="action">Action</option>
                      <option value="adventure">Adventure</option>
                      <option value="animation">Animation</option>
                      <option value="biography">Biography</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="drama">Drama</option>
                      <option value="family">Family</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="history">History</option>
                      <option value="horror">Horror</option>
                      <option value="music">Music</option>
                      <option value="mystery">Mystery</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-Fi</option>
                      <option value="thriller">Thriller</option>
                      <option value="war">War</option>
                      <option value="western">Western</option>
              </select>
            ),
            filterMethod: (filter, rows) =>
              filter.value !== "all" ? matchSorter(rows, filter.value, { keys: ["genre"] }) : rows,
            filterAll: true
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        style={{
          width: '75%',
          height: '50%',
        }}
      />
    </div>
  );
}

export default MoviesList;