

export default {
    state: {
        users: [
            {
                name: 'Gabriel',
                id: 'gabriel',
                products: [
                    {
                        name: 'Mountin fox notebook',
                        price: 12.90,
                        likes: 0,
                        comments: [],

                    },
                    {
                        name: 'Brown bear cushion',
                        price: 18.90,
                        likes: 0,
                        comments: [],

                    }
                ]


            },
            {
                name: 'Elysa',
                id: 'elysa',
                products: [
                    {
                        name: 'Hummingbird cushion',
                        price: 18.90,
                        likes: 0,
                        comments: [],

                    }
                ]


            },
        ],







    },
    getters: {
        users(state) {
            return state.users
        }

    },
    mutations: {

    },
    actions: {

    }
}