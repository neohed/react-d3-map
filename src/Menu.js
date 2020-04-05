import React from 'react';
import {
    Link
} from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="map-simple">Map Simple</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
