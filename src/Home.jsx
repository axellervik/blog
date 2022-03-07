import logo from './logo.svg';
import './App.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is a ... <code>work in progress</code>? 
                </p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    idk
                </a>
                </header>
            </div>
        );
    }
}

export default Home;