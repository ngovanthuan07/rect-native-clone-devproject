import {combineReducers} from 'redux';
import { auth } from './auth';
import { modal } from "./modal";
import { storage } from './storage';
import { cart } from './cart';
import { spinner } from './spinner';
import { room } from './room';
import { postAndProduct } from './postAndProduct';

const Reducers = combineReducers({
    auth,
    modal,
    storage,
    postAndProduct,
    cart,
    spinner,
    room
})

export default Reducers;
