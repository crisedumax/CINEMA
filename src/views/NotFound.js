import React from 'react';
import img from '../images/404.png'
import Style from './NotFount.css'
function NotFound() {
    return (
        <div className={Style.error}>
            <img src={img} alt="img" />;
        </div>
    );
}

export default NotFound;
