import React, { useState } from 'react';
import logo from '../assets/static/logo.png'
import '../assets/styles/App.scss';
import useInitialStateM from '../hooks/messageInitial';

const API = 'http://localhost:3010/welcome'

const Home = (props) => {
  return (
    <>
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <h6>e-Commerce Gapsi</h6>
            <button className="btn btn-perso"><i className="fas fa-ellipsis-v"></i></button>
          </div>
          <div className="card-body">
            <div className="cimg"><img src={logo} className="rounded-circle" alt="logo principal" /></div>
            <p className="card-text"></p>
            <a href="./table" className="btn btn-cont">Continuar</a>
          </div>
          <div className="card-footer">
            <div className="shadow-sm p-1 mb-2 bg-body rounded foo">
              <p>version 0.0.1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
