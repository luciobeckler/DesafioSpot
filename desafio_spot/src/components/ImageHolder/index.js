import './ImageHolder.css';
import React, { useState, useEffect } from 'react';

const ImageHolder = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageUrl, setImageUrl] = useState('');
    const [urlFinal, setUrlFinal] = useState('');

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
        if (windowWidth > 600) {
            setImageUrl(props.urlWeb);
            setUrlFinal(props.urlWeb);
        } else {
            setImageUrl(props.urlMobile);
            setUrlFinal(props.urlMobile);
        }
    }, [windowWidth, props.urlWeb, props.urlMobile]);

    return <img className='imagem' src={urlFinal} alt={props.alt} />;
};

export default ImageHolder;
