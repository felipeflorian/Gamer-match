import './beg_style.css'
import Nav from './Nav';
import WAR from './images/warzone.png';
import FIFA from './images/fifa.png';
import FORZA from './images/forza.png';
import React from 'react';

const imgs = [{img: WAR, juego:'WARZONE'}, {img: FIFA, juego: 'FIFA'}, {img: FORZA, juego: 'FORZA'}];
const delay = 2500;

function Beginning(){
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);
    return(<>
        <div className='wrapper_beg'>
        <Nav />
            <div className="main_content_beg">
                <div className="header">
                    <h1> GAMES </h1>
                </div>
                <div className="logo">
                    <div className="slideshow">
                        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                            {imgs.map((item, index) => (
                                <div className="slide" key={index}>
                                    <div className="box">
                                        <img src={item.img}></img>
                                        <h2>{item.juego}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>         
            </div>
            </div>
    </>
    );
}

export default Beginning;