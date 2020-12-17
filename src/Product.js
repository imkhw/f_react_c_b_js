import React from 'react'
import PropTypes from 'prop-types'

import defaultImage from './assets/defaultImage.jpg'

const Product = ({name, image, price}) => {
    const imageUrl = image && image.url
    return (
        <React.Fragment>
            <div>{name}</div>
            <img src={imageUrl || defaultImage} style={{ width: '200px'}}/>
            <div>$ {price || 'Price will be available soon'}</div>
        </React.Fragment>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    price: PropTypes.string.isRequired,
}

export default Product
