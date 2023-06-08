import React from 'react'

function GetImages({ product, imgSelected, setImgSelected }) {
    return (
        <div className='block__image_thumbs'>
            {product.images.map((image, index) => 
                <li key={index}>
                    <img src={image.large.url}
                        alt="image"
                        className='image_thumbs'
                        onClick={() => setImgSelected(image.large.url)}
                        style={{ border: imgSelected === image.large.url ? '1px solid #000000' : '' }}
                    />
                </li>
            )
            }
        </div>
    )

}

export default GetImages


