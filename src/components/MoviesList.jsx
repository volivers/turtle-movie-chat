import React, { useState, useEffect } from 'react';
import data from '../data/movies.json';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
    // console.log(movies);
  },[])

  return (
    <div>
      <ReactTable
        data={movies}
        columns={[
          {
            Header: "Title",
            accessor: "title",
            width: 300,
            filterable: true
          },
          {
            Header: "Year",
            accessor: "year",
            maxWidth: 150
          },
          {
            Header: "Runtime",
            accessor: "runtime",
            maxWidth: 150
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