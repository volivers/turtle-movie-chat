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
            accessor: "title",
            width: 300,
            filterable: true,
            Filter: ({filter, onChange}) => (
              <input type='text'
                     placeholder="Filter by title"
                     value={filter ? filter.value : ''}
                     onChange={event => onChange(event.target.value)} />),
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["title"] }),
            filterAll: true
          },
          {
            Header: "Year",
            accessor: "year",
            maxWidth: 150
          },
          {
            Header: "Runtime",
            accessor: "runtime",
            maxWidth: 150,
            Cell: row => (
              row.value ? <span>{Math.floor(row.value / 60)}h {row.value % 60}min</span> : '-'
            )
          },
          {
            Header: "Revenue",
            accessor: "revenue",
            maxWidth: 150,
            Cell: row => (
              row.value ? <span>${row.value} M</span> : '-'
            )
          },
          {
            Header: "Rating",
            accessor: "rating",
            maxWidth: 150
          },
          {
            Header: "Genres",
            accessor: "genre",
            width: 300,
            filterable: true
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        style={{
          width: '70%',
          height: '50%',
        }}
      />
    </div>
  );
}

export default MoviesList;