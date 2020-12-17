import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        const products =  await res.json()
        setProducts(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return {products}
}