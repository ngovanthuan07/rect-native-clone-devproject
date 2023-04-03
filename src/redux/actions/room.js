import axiosClient from '../../services/axiosClient';
import { showRoomService } from '../../services/roomService';
import {
    LOAD_ROOM,
    LOAD_ROOM_ID
    
} from './../constants'

export const loadRooms = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('/showAllRoom')
        dispatch({
          type: LOAD_ROOM,
          rooms: response?.data?.success ? response.data.rooms : []
        })
    } catch (error) {
        dispatch({
          type: LOAD_ROOM,
          rooms: []
        })
    }
}
export const loadRoomById = (id) => async (dispatch) => {
  try {
      const room = await showRoomService(id)
      dispatch({
        type: LOAD_ROOM_ID,
        room: room?.id ? room : null
      })
  } catch (error) {
      dispatch({
        type: LOAD_ROOM_ID,
        room: null
      })
  }
}
