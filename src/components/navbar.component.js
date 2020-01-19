import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>ExerTracker</Link>
            <div className='navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link className='nav-link' to='/'>Exercises</Link>
                </li>
                <li className='navbar-item'>
                  <Link className='nav-link' to='/create'>Create Exerices Log</Link>
                </li>
                <li className='navbar-item'>
                  <Link className='nav-link' to='/user'>Create User</Link>
                </li>
              </ul>
            </div>
          </nav>  
        )
    }
}