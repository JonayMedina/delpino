import {getLocalUser} from './helpers/auth';
import Vue from 'vue'
import Vuex from 'vuex'
const user = getLocalUser();
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		currentUser : user,
        auth_error : null,
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: '/img/logo-final.png',
        drawer: '#FF9800',
        emailDev: 'jonaymedinadev@gmail.com',
        instagram: process.env.MIX_IG_URL || 'https://www.instagram.com/venexpressdelpino/',
        facebook: process.env.MIX_FB_URL || 'https://www.facebook.com/venexpressdelpino/',
	},
	getters:{
		currentUser(state){
			return state.currentUser;
        },
	},
	mutations:{
		login(state){
			state.auth_error = null
		},
		loginSuccess(state,payload){
			state.currentUser = Object.assign({},payload.user,{token:payload.access_token});
			localStorage.setItem('user',JSON.stringify(state.currentUser));
		},
		loginFailed(state,payload){
			state.auth_error = payload.error;
		},
		logout(state){
			localStorage.removeItem('user');
			state.currentUser=null;
        },
        SET_BAR_IMAGE (state, payload) {
            state.barImage = payload
        },
        SET_DRAWER (state, payload) {
            state.drawer = payload
        }
	},
	actions:{
		login(context){
			context.commit('login');
		}
	}
});
