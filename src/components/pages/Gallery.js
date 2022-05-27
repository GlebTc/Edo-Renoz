import React from 'react'
import imagesArray from '../utilities/imagesArray'

const Gallery = () => {

const imagesElement = imagesArray.map(item =>
    <img className="gallery__img" src={`${item.img__src}`} alt={`${item.alt__msg}`} />
)

    return (
        <>
            <div className="main__container">
                <h1>Here is what we can do for you.</h1>
                <div className="gallery__images__container">
                    <div className="image__container">
                        {imagesElement}
                    </div>                        
                </div>
            </div>
        </>
    )    


}

export default Gallery