import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';  

function ActionLink() {
  function handleClick(e) {
            var l = document.getElementById(logo);
            var adur = l.style.animationDuration;
            e==0 ? adur += 10 + 's' : adur -= 10 + 's' ;
            l.style.animationDuration = adur;
        }
  return (
    <div>
        <button className = "SimpleButton" onClick={handleClick(0)}> Slower! </button>
        <button className = "SimpleButton" onClick={handleClick(1)}> Faster! </button>
    </div> 
  );
}
            


            