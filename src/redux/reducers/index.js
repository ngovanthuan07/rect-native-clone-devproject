import {combineReducers} from 'redux';
import { auth } from './auth';
import { modal } from "./modal";
import { storage } from './storage';
import { posts } from './post';

const Reducers = combineReducers({
    auth,
    modal,
    storage,
    posts
})

export default Reducers;
