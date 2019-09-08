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
            this.updateTotal()
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

    alterQuantity = (id, num) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count += num

        if(product.count === 0) {
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price
            this.setState(() => {
            return {
                cart: [...tempCart]
            }
            },
            () => {
                this.updateTotal()
            })
        }
        
    }
    
    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },
        () => {
            this.updateTotal()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        },
        () => {
            this.setProducts()
            this.updateTotal()
        })
    }

    updateTotal = () => {
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
                alterQuantity: this.alterQuantity,
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