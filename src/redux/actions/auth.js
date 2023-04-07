import axiosClient from '../../services/axiosClient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_STATE_CHANGE} from '../constants'
// import { getPostsByUser } from './post';

export const userAuthStateListener = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('/me');
        if (response.data.user != null && response.status === 200) {
            const user = response.data.user
            
            await AsyncStorage.setItem('USER', JSON.stringify(response.data.user));
            console.info('USER AUTH STATE SUCCESSFUL');
            
            dispatch({
                type: USER_STATE_CHANGE,
                currentUser: user,
                isSeller: user['seller'].length > 0 ? true : false,
                loaded: true
            })  

            // dispatch(getPostsByUser)

        } else {
            await AsyncStorage.removeItem('USER');
            await AsyncStorage.removeItem('TOKEN');
            dispatch({
                type: USER_STATE_CHANGE,
                currentUser: null,
                isSeller: false,
                loaded: true
            })
        }
    } catch (error) {
        console.log('UserAuthStateListener Error',error);
        await AsyncStorage.removeItem('USER');
        await AsyncStorage.removeItem('TOKEN');
        dispatch({
            type: USER_STATE_CHANGE,
            currentUser: null,
            isSeller: false,
            loaded: true
        });
    }
}



export const setUserAndToken = (user, token) => async (dispatch) => {
    await AsyncStorage.setItem('USER', JSON.stringify(user));
    await AsyncStorage.setItem('TOKEN', token);
    dispatch({
        type: USER_STATE_CHANGE,
        currentUser: user,
        token: token,
        loaded: true
    })
}


export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    console.log("LOGIN", email, password)
    axiosClient.post('/login', {
        email: email,
        password: password,
    })
    .then((response) => {
        resolve(response);
      })
    .catch((error) => {
        reject(error);
    })
});

export const register = (data) => dispatch => new Promise((resolve, reject) => {
    axiosClient.post('/signup', data)
    .then((response) => {
        resolve(response);
      })
    .catch((error) => {
        reject(error);
    })
});

export const logout = () => dispatch => new Promise((resolve, reject) => {
    axiosClient.post('/logout')
    .then((response) => {
        resolve(response);
      })
    .catch((error) => {
        reject(error);
    })
});



export const loadCurrentUserData = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('/me');
        if (response.data.user != null && response.status === 200) {
            const user = response.data.user
            return dispatch({
                type: USER_STATE_CHANGE,
                currentUser: user,
                loaded: true
            })            
        }
    } catch (error) {
        console.log(error);
    }
}
