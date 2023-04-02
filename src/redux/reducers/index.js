import {combineReducers} from 'redux';
import { auth } from './auth';
import { modal } from "./modal";
import { storage } from './storage';
import { posts } from './post';
import { cart } from './cart';

const Reducers = combineReducers({
    auth,
    modal,
    storage,
    posts,
    cart
})

export default Reducers;
