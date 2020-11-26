import productService from '../services/productService.js'
export default {
    state: {
        products: [
            {
                name: 'Mountain fox notebook',
                _id: 1,
                author: {
                    name: 'Gabriel',
                    id: 'gabriel'
                },
                price: 12.90,
                likes: {
                    counter: 1,
                    isPressed: false,
                    isDissable: false
                },
                comments: [],
            },
            {
                name: 'Brown bear cushion',
                _id: 2,
                author: {
                    name: 'Gabriel',
                    id: 'gabriel'
                },
                price: 18.90,
                likes: {
                    counter: 3,
                    isPressed: true,
                    isDissable: false
                },
                comments: [],
            },
            {
                name: 'Hummingbird cushion',
                _id: 3,
                author: {
                    name: 'Elysa',
                    id: 'elysa'
                },
                price: 18.90,
                likes: {
                    counter: 0,
                    isPressed: false,
                    isDissable: true
                },
                comments: [],
            },
        ]

    },
    getters: {
        products(state) {
            return state.products
        }
    },
    mutations: {
        editProduct(state, { newProduct }) {
            console.log("🚀 ~ file: ProductsStore.js ~ line 64 ~ editProduct ~ newProduct", newProduct)
            let idx = state.products.findIndex(product => product._id === newProduct._id)
            state.products.splice(idx, 1, newProduct)

        }

    },
    actions: {
        async likeClicked({ commit }, { product }) {
            let newProduct = await productService.likeClicked(product)
            commit({ type: 'editProduct', newProduct })


        }

    }
}