import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SearchBar from './search_bar';

class Movies extends Component{

  componentDidMount(){
    this.props.fetchMovies();
  }

  renderMovies(){
    return _.map(this.props.movies,  movie => {
      console.log(movie);
      return <li key={movie._id}>
        <img src={movie.poster_url}/>
        <div>
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        </div>

      </li>
    });
  }

  render(){
    return(
      <div>
        <SearchBar onSearchKeywordChange={(e) => {
          this.props.filterMovies(e.target.value);
        }}/>
        <ul>
          {this.renderMovies()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, {fetchMovies})(Movies);



