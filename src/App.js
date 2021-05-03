import React, { useEffect } from 'react';
import useWindowSize from './components/useWindowSize';
import './App.css';

function App() {
    const windowSize = useWindowSize();

    // useEffect(() => {
    //     console.log(windowSize && windowSize[0]);
    //     if (windowSize && windowSize[0] && windowSize[0] < 1024 && windowSize[1] > windowSize[0]) {
    //         document.body.classList.add('rotated');
    //     } else {
    //         document.body.classList.remove(['rotated'])
    //     }
    // }, [windowSize])

    const handleTest1 = () => {
        window.screen.orientation.lock('landscape').then(() => console.log('successfully locked orientation'), () => console.log('error occurred'));
    }



    return (
        <div className="App">
            <h2>Hi, this is a page as empty, as the toilet paper section during covid! </h2>
            <p>Just so it has some meaning, here is a cool music: </p>
            <a href='https://www.youtube.com/watch?v=FK-YmV1eVaU'>Cool music</a>
            <p>Only solution 1 works, and we have a default 'solution', which may or may not work on safari</p>
            <ul>
                <li><button onClick={handleTest1}>Test1</button></li>
                <li><button>Test2</button></li>
                <li><button>Test3</button></li>
            </ul>

            <ul>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
            </ul>
        </div>
    );
}

export default App;
