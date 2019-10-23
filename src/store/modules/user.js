export default {
	actions: {
		async fetchUsers(ctx, limit = 10) {
			const res = await fetch(
				'http://jsonplaceholder.typicode.com/users?_limit=' + limit
			);
		    const users = await res.json();

		    ctx.commit('updateUsers', users)
		}
	},
	mutations: {
		updateUsers(state, users) {
			state.users = users
		}
	},
	state: {
		users: []
	},
	getters: {
		allUsers(state) {
			return state.users
		}
	}
}