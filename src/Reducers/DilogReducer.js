import { CLOSE_DILOG, OPEN_DILOG } from '../Constants/DilogConstant';

const DilogData = {
    Open: false,
}

export default function DilogBox(state = DilogData, action){
    switch(action.type){
        case OPEN_DILOG:
            return {
                ...state,
                Open : action.Open,
            }
        case CLOSE_DILOG:
            return {
                ...state,
                Open : action.Open,
            }
        default:
            return state;
    }
}