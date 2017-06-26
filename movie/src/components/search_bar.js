import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterMovies, fetchMovies } from '../actions';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: ''
    };

  }

  onInputChange(searchKeyword) {

    if(!searchKeyword){
      this.props.fetchMovies(searchKeyword);
    }else {
      this.props.filterMovies(searchKeyword);
    }

  }

  render() {
    return (
      <div className="cf">
        <label className="clip"
               for="search-input">Find movie</label>
        <input className="f6 f5-l input-reset fl black-80 ba b--light-gray pa2 lh-solid w-100 br2 br--left-ns"
               placeholder="Movie title"
               type="search"
               name="search-input"
               id="search-input"

               onChange={(event) => { this.onInputChange(event.target.value) }}/>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    searchKeyword: state.searchKeyword
  }
}


export default connect(mapStateToProps, { filterMovies, fetchMovies } )(SearchBar);
