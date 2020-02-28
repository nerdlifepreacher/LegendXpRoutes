import request from "superagent";
import { getallmobs, addmobtoroute, getAllRouteMobs, getXp } from "../apis/mobs"
export const SET_MOBS = 'SET_MOBS'
export const SET_ROUTEMOBS = 'SET_ROUTEMOBS'
export const SET_XP = 'SET_XP'

export const setmobs = mobs => {
    return {
        type: SET_MOBS,
        mobs: mobs  
    }
}
export const setXp = xp => {
    return {
        type: SET_XP,
        xp: xp
    }
}
export const setRouteMobs = mobs => {
    return {
        type: SET_ROUTEMOBS,
        mobs: mobs  
    }
}
export function fetchmobs(obj) {
    return dispatch => {
        return getallmobs(obj).then(mobs => {
           return dispatch(setmobs(mobs))
           
        })
    }
}
export function addtoRoute(obj) {
    return dispatch => {
        addmobtoroute(obj)
        return dispatch(fetchRouteMobs(obj))
    }
}
export function fetchRouteMobs(obj) {
    return dispatch => {
        return getAllRouteMobs(obj).then(mobs => {
            return dispatch(setRouteMobs(mobs))
        })
    }
}
export function calculatexp() { 
    return dispatch => {
        return getXp().then(xp => {
          return dispatch(setXp(xp))
      }) 
    }
}
