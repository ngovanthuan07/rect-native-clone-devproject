import {combineReducers} from 'redux';
import { auth } from './auth';
import { modal } from "./modal";
import { storage } from './storage';
import { posts } from './post';
import { cart } from './cart';
import { spinner } from './spinner';
import { room } from './room';

const Reducers = combineReducers({
    auth,
    modal,
    storage,
    posts,
    cart,
    spinner,
    room
})

export default Reducers;
