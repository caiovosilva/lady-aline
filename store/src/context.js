import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {

            return { products: tempProducts }
        })
    }

    getItem = id => {
        return this.state.products.find(item => item.id === id)
    }

    handleDetail = id => {
        const product = this.getItem(id)
        this.setState(()=> {
            return {detailProduct:product}
        })
    }
    addToCart = id => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, 
        () => {
            this.addTotals()
        })
    }

    openModal = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return { 
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { 
                modalOpen: false
            }
        })
    }

    increment = id => {
        console.log("increment")

    }

    decrement = id => {
        console.log("decrement")

    }

    removeItem = id => {
        console.log("removeItem")
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        })
    }

    addTotals = () => {
        let total = 0
        this.state.cart.map(item => (total += item.total))
        this.setState(() => {
            return {
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};