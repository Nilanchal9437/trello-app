import { OPEN_DILOG,CLOSE_DILOG } from '../Constants/DilogConstant';

export const openDilog = (Open) => {
    return {
        type:OPEN_DILOG,
        Open:Open,
    }
}

export const closeDilog = (Open) => {
    return {
        type:CLOSE_DILOG,
        Open:Open,
    }
}