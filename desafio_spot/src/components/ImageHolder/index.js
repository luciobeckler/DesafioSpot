import './ImageHolder.css'

import React, { useState, useEffect } from 'react';

const MyComponent = (urlWeb, urlMobile, alt) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageUrl, setImageUrl] = useState('');

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
        if (windowWidth < 600) {
            setImageUrl(urlMobile);
            console.log(urlWeb)
        } else {
            setImageUrl(urlWeb);
            console.log(urlWeb)
        }
    }, [windowWidth, urlMobile, urlWeb]);

    return <img className='imagem' style={{ backgroundImage: '/imagens/web/segundoBanner.png' }} alt={alt} />;
};

export default MyComponent;