import React from 'react';
import './ImageLinkForm.css'

// whenever you pass a prop, the component that is passing thee prop must have the same name
const ImageLinkForm = ({ onInputChange }) => {
    console.log(onInputChange);
    return (
        <div className="container">
            <p>
                {'This will detect faces in your pictures. Try it out!'}
            </p>
            <div className='center'>
                    <div className='form center pa4 br4 shadow-5'>
                    <input  onChange={onInputChange} className='br2 f4 pa2 w-70 center' type='text' />
                    <button className='ma2 w-25 grow f3 link ph3 pv2 dib br2 bg-light-blue'>Detect</button>
                </div>
            </div>
        </div>   
    );
}

export default ImageLinkForm;