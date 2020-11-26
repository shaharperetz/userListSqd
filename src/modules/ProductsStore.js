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
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
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
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
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
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
            },
            {
                name: 'Mountain fox notebook',
                _id: 4,
                author: {
                    name: 'Arik',
                    id: 'arik'
                },
                price: 12.90,
                likes: {
                    counter: 1,
                    isPressed: false,
                    isDissable: false
                },
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
            },
            {
                name: 'Brown bear cushion',
                _id: 5,
                author: {
                    name: 'Arik',
                    id: 'arik'
                },
                price: 18.90,
                likes: {
                    counter: 3,
                    isPressed: true,
                    isDissable: false
                },
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
            },
            {
                name: 'Hummingbird cushion',
                _id: 6,
                author: {
                    name: 'Arik',
                    id: 'arik'
                },
                price: 18.90,
                likes: {
                    counter: 0,
                    isPressed: false,
                    isDissable: true
                },
                comments: [
                    { txt: 'Great item', author: 'Shahar' },
                    { txt: 'loved it!!', author: 'Hila' },
                    { txt: 'the best purchase ever!', author: 'Meital' },
                ],
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
            let idx = state.products.findIndex(product => product._id === newProduct._id)
            state.products.splice(idx, 1, newProduct)

        }

    },
    actions: {
        async likeClicked({ commit }, { product }) {
            let newProduct = await productService.likeClicked(product)
            commit({ type: 'editProduct', newProduct })


        },
        async addComment({ commit }, { productComment }) {
            let newProduct = await productService.addComment(productComment)
            commit({ type: 'editProduct', newProduct })
        }

    }
}