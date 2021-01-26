import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">MERN APP </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/quotes">Quotes List</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/newquote">New Quote</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navigation;