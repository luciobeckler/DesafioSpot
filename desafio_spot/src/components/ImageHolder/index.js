import './ImageHolder.css'

import React, { useState, useEffect } from 'react';

const ImageHolder = (urlWeb, urlMobile, alt) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageUrl, setImageUrl] = useState('');
    const [urlFinal, seturlFinal] = useState('')


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 600) {
            setImageUrl(urlWeb);
            seturlFinal(imageUrl.urlWeb);
            console.log(urlFinal)
        } else {
            setImageUrl(urlMobile);
            seturlFinal(imageUrl.urlMobile);
            console.log(urlFinal)
        }

    }, [windowWidth]);


    return <img className='imagem' src={urlFinal} alt={alt}></img>
};

export default ImageHolder;