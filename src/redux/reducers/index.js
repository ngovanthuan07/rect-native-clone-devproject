import {combineReducers} from 'redux';
import { auth } from './auth';
import { modal } from "./modal";

const Reducers = combineReducers({
    auth,
    modal,
})

export default Reducers;
