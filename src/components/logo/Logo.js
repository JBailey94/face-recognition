import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt id='logo' className="Tilt br2 shadow-2" options={{ max : 60, easing: "cubic-bezier(.03,.98,.52,.99)", transition: true }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img alt='logo' src={face}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;