import React, { useEffect, useState, useCallback, useMemo} from 'react'

import {useFetch} from './useFetch'

const calculateMostExpensiveItem = (data) => {

    const itemPrices = data.map((item) => {
        return item.fields.price
    })

    return itemPrices.reduce((currentPrice, itemPrice) => {
        if (itemPrice >= currentPrice) {
            currentPrice = itemPrice
        }
        return currentPrice
    }, 0) / 100
}

const PerformanceOptimization = () => {
    const url = 'https://course-api.netlify.app/api/javascript-store-products'

    const {products} = useFetch(url)

    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    // useCallback deals with function
    const addToCart = useCallback(() => {
            setCart(cart + 1)
        }, [cart])

    // useMemo deals with value
    const mostExpensiveItem = useMemo(() => calculateMostExpensiveItem(products), [products])

    return (
        <div>
            <h4>Performance Optimization</h4>

            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => {
                    setCount(count + 1)
                }}>Add +</button>
            </div>

            <div>Maximum price: $ {mostExpensiveItem}</div>

            <List products={products} addToCart={addToCart}/>
        </div>
    )
}

const List = React.memo(({products, addToCart}) => {
    useEffect(() => {
        console.log('List is called.')
    })
    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <Item key={product.id} {...product} addToCart={addToCart}/>
                    )
                })
            }
        </div>
    )
})

const Item = ({fields, addToCart}) => {
    useEffect(() => {
        console.count('Item is called.')
    })
    let {name, price} = fields
    price = price / 100
    const image = fields.image[0].url
    return (
        <div>
            <img src={image} style={{width: '200px'}} alt={name} />
            <p>{name}</p>
            <p>$ {price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default PerformanceOptimization
