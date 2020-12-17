import { useState, useEffect, useCallback } from "react"

export const useFetch = (url) => {
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async () => {
        const res = await fetch(url)
        const products = await res.json()
        setProducts(products)
    }, [url])

    useEffect(() => {
        getProducts()
    }, [url, getProducts])

    return {products}
}