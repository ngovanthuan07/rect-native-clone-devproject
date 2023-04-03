
import { LOAD_ROOM, LOAD_ROOM_ID } from "../constants";

const initialState = {
    rooms: [],
    room: null
}


export const room = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ROOM: {
            return {
                ...state,
                rooms: action.rooms,
            }
        }
        case LOAD_ROOM_ID: {
            return {
                ...state,
                room: action.room,
            }
        }
        default:
            return state
    }
}