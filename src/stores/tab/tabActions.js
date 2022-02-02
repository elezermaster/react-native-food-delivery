export const SET_SELECTED_TAB = 'SET_SELECTED_TAB'
import { useDispatch } from 'react-redux'


export const setSelectedTabSuccess = (selectedTab) => ({
    type: SET_SELECTED_TAB,
    payload: {selectedTab}
})

export function setSelectedTab(selectedTab){
    
    return dispatch => {
        dispatch(setSelectedTabSuccess(selectedTab))
    }
    //const dispatch = useDispatch(setSelectedTabSuccess(selectedTab))
    //return dispatch
}