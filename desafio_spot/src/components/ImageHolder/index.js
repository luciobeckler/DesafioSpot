import './ImageHolder.css'

const ImageHolder = ({ src, alt }) => {
    return (<img className='imagem' src={src} alt={alt} />)
};

export default ImageHolder