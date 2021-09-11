export function initialize(store,router){
	router.beforeEach((to, form, next) => {
        const {requiredAuth, guest} = to.meta;

		const currentUser = store.state.currentUser;

        if (currentUser && requiredAuth) {
            if (requiredAuth.includes(currentUser.role) == false && currentUser.role == 1) {
                next({ name: 'Dashboard' });
            } else if (requiredAuth.includes(currentUser.role) == false && currentUser.role == 4) {
                next({ name: 'customer-dashboard' });
            } else {
                next();
            }
        } else if (!currentUser && requiredAuth) {
            next({ name: 'Login' });
        } else if (currentUser && guest == true){
           if (currentUser.role == 1) {
                next({ name: 'Dashboard' });
            } else if (currentUser.role == 4) {
                next({ name: 'customer-dashboard' });
            }
        } else {
            next();
        }

	});
	axios.interceptors.response.use(null,(error)=>{
		if (error.response.status == 401) {
			store.commit('logout');
            router.push({name:'Login'});
		}
		return Promise.reject(error);
    });


	if (store.getters.currentUser) {
		setAuthorization(store.getters.currentUser.token)
    }

}
export function setAuthorization(token){
	axios.defaults.headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`}
}
