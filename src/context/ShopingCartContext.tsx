"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

type ShopingCartContextProviderProps = {
    children: React.ReactNode
}

type TCartItems = {
    id: number;
    qty: number;
};

type TShopingCartContext = {
    cartItems: TCartItems[];
    handleIncreaseProductQty: (id: number) => void
    handleDecreaseProductQty: (id: number) => void
    getProductQty: (id: number) => number
    cartTotalQty: number
    handleRemoveProduct: (id: number) => void
    handleAddToCart: (id: number) => void
};

const ShopingCartContext = createContext({} as TShopingCartContext);


export const useShopingCartContext = () => {
    return useContext(ShopingCartContext)     // this is a custom hook
}


export function ShopingCartContextProvider({ children }: ShopingCartContextProviderProps) {

    const [cartItems, setCartItems] = useState<TCartItems[]>([])


    const cartTotalQty = cartItems.reduce((TotalQty, item) => {
        return TotalQty + item.qty
    }, 0)


    const getProductQty = (id: number) => {
        return cartItems.find((item) => item.id == id)?.qty || 0
    }

    const handleAddToCart = (id: number) => {
        setCartItems((currentItem) => {
            let isNotProductExist = currentItem.find((item) => item.id == id) == null

            if (isNotProductExist) {
                return [...currentItem, { id: id, qty: 1 }]
            }

            return currentItem
        })
    }

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItem) => {
            let isNotProductExist = currentItem.find((item) => item.id == id) == null

            if (isNotProductExist) {
                return [...currentItem, { id: id, qty: 1 }]
            }

            else {

                return currentItem.map((item) => {

                    if (item.id == id) {

                        return {
                            ...item,
                            qty: item.qty + 1,
                        };

                    }

                    else {

                        return item

                    }
                })
            }
        })
    }

    const handleDecreaseProductQty = (id: number) => {
        setCartItems((currentItem) => {
            let isLastOne = currentItem.find((item) => item.id == id)?.qty == 1

            if (isLastOne) {
                return currentItem.filter((item) => item.id != id) // یعنی همه محصولاتی که با این ایدی برابر نیستند رو برمیگردونه و اون یه دونه رو ول می کنه
            }

            else {

                return currentItem.map((item) => {

                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty - 1,
                        };

                    }

                    else {

                        return item

                    }
                })
            }
        })
    }

    const handleRemoveProduct = (id: number) => {
        setCartItems((currentItem) => {
            return currentItem.filter((item) => item.id != id)
        })
    }

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems")

        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])


    return (
        <ShopingCartContext.Provider value={{
            cartItems,
            handleIncreaseProductQty,
            getProductQty,
            cartTotalQty,
            handleDecreaseProductQty,
            handleRemoveProduct,
            handleAddToCart,
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}