
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
                    counter: 0,
                    isPressed: true,
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
                    counter: 0,
                    isPressed: false,
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

    },
    actions: {

    }
}