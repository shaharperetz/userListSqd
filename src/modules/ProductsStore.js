
export default {
    state: {
        products: [
            {
                name: 'Mountin fox notebook',
                author: {
                    name: 'Gabriel',
                    id: 'gabriel'
                },
                price: 12.90,
                likes: 0,
                comments: [],
            },
            {
                name: 'Brown bear cushion',
                author: {
                    name: 'Gabriel',
                    id: 'gabriel'
                },
                price: 18.90,
                likes: 0,
                comments: [],
            },
            {
                name: 'Hummingbird cushion',
                author: {
                    name: 'Elysa',
                    id: 'elysa'
                },
                price: 18.90,
                likes: 0,
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