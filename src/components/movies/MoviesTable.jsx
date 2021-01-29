import React, { useState, useEffect } from 'react';
import data from '../../data/movies.json';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { matchSorter } from 'match-sorter';
import CommentsList from '../comments/CommentsList';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import useStyles from '../../styles/MoviesTableStyles';

const MoviesTable = ({ user }) => {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(data);
  },[])

  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);

  const handleOpenModal = (row) => {
    setOpen(true);
    setSelectedMovie(row)
  };

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
            className: classes.root,
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
            maxWidth: 150,
            className: classes.root,
          },
          {
            Header: "Runtime",
            headerStyle: {textAlign: 'left'},
            accessor: "runtime",
            maxWidth: 150,
            className: classes.root,
            Cell: row => (
              row.value ? <span>{Math.floor(row.value / 60)}h {row.value % 60}min</span> : '-'
            )
          },
          {
            Header: "Revenue",
            headerStyle: {textAlign: 'left'},
            accessor: "revenue",
            maxWidth: 150,
            className: classes.root,
            Cell: row => (
              row.value ? <span>${row.value} M</span> : '-'
            )
          },
          {
            Header: "Rating",
            headerStyle: {textAlign: 'left'},
            accessor: "rating",
            maxWidth: 150,
            className: classes.root,
            Cell: row => (
              Math.floor(row.value) === 5 ? <span><TrendingFlatIcon className={classes.trendingFlat}/> {row.value}</span>
                : row.value > 5 ? <span><TrendingUpIcon className={classes.trendingUp}/> {row.value}</span>
                : <span><TrendingDownIcon className={classes.trendingDown}/> {row.value}</span>
            )
          },
          {
            Header: "Genres",
            headerStyle: {textAlign: 'left'},
            accessor: "genre",
            width: 300,
            className: classes.root,
            filterable: true,
            Cell: row => (
              row.value ? <span>{(row.value).join(", ")}</span> : '-'
            ),
            Filter: ({filter, onChange}) => (
              <select onChange={event => onChange(event.target.value)}
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
        getTrProps={(state, rowInfo) => {
          return {
            onClick: () =>
              handleOpenModal(rowInfo.original)
          };
        }}
        defaultPageSize={10}
        className="-striped -highlight"
      />
      <CommentsList open={open} setOpen={setOpen} movie={selectedMovie} user={user} />
    </div>
  );
}

export default MoviesTable;