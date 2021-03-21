import React from 'react';
import { Link } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import Profile from '../assets/static/logoBlanco.png';
import '../assets/styles/App.scss'

const API = 'http://localhost:3010/welcome'

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h3>Loading</h3> : (
    <>
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <h6>e-Commerce Gapsi</h6>
            <button className="btn btn-perso"><i className="fas fa-ellipsis-v"></i></button>
          </div>
          <div className="card-body">
            <div className="cimg">
              <img src={Profile} className="rounded-circle" alt="logo principal" />
            </div>
            <p className="card-text">{initialState.msgWelcome}</p>
            <Link to="/vendors" className="btn btn-cont">Continuar</Link>
          </div>
          <div className="card-footer">
            <div className="shadow-sm p-1 mb-2 bg-body rounded foo">
              <p>{initialState.versionMsg}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
