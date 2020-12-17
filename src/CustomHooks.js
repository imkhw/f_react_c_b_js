import React from 'react'

import {useFetch} from './useFetch'

const CustomHooks = () => {
    const url = 'https://course-api.netlify.app/api/javascript-store-products'

    const {loading, products} = useFetch(url)

    console.log(products)

    return (
        <React.Fragment>
            <h4>Custom hooks</h4>
            <div>{loading ? 'Loading...' : 'Data'}</div>
        </React.Fragment> 
    )
}

export default CustomHooks
