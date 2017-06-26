import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render (){
      return (
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/upcoming">Coming Soon</Link>
          </li>
          <li>
            <Link to="/info">Information</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      );
    }

}

export default Menu;
