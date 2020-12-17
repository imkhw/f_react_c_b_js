import React from 'react'
import Product from './Product'
import { useFetch } from './useFetch'

const PropTypes = () => {
    const url = 'https://course-api.netlify.app/api/react-prop-types-example'

    const {products} = useFetch(url)
    
    return (
        <React.Fragment>
            <h4>Prop Types</h4>
            {
                products.map((product) => {
                    return (
                        <Product key={product.id} {...product}/>
                    )
                })
            }
        </React.Fragment>
    )
}

export default PropTypes
