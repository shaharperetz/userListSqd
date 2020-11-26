

export default {
    state: {
        users: [
            {
                name: 'Gabriel',
                id: 'gabriel',
                products: []


            },
            {
                name: 'Elysa',
                id: 'elysa',
                products: []


            },
            {
                name: 'Arik',
                id: 'arik',
                products: []


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