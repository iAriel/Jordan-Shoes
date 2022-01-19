import React from 'react';
import './index.css';

import Image from '../../assets/images/wallpaper.jpeg';

export default function Banner(){
    return(
        <div>
            <div className="imageContainer" >
                <img src={Image} alt="Jordan's Shoe" />
            </div>
            <div className="imageText">
                <p className="title">A melhor loja de Jordan</p>
                <p className="titleDescription">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
            </div>
        </div>
    )
}