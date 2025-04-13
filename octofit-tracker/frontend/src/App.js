import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="OctoFit Logo" />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="display-4">Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities and compete with your friends!</p>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Statistics</h5>
            <p className="card-text">View your activity stats and leaderboard rankings.</p>
            <a href="#" className="btn btn-primary">Go to Dashboard</a>
          </div>
        </div>

        <table className="table mt-4">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Activity</th>
              <th scope="col">Duration</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Running</td>
              <td>30 mins</td>
              <td>2025-04-12</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cycling</td>
              <td>1 hour</td>
              <td>2025-04-11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
