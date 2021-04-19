import { LIST_TITLE, CREATE_LIST, DELETE_LIST, UPDATE_LIST_ACESS, UPDATE_LIST } from '../Constants/ListConstant';

export const setListTitle = (listTitle) => {
    return {
        type:LIST_TITLE,
        listTitle: listTitle,
    }
}

export const setList = () => {
    return (dispatch) => {
        dispatch(edit());
        dispatch(setListTitle(''));
    }
}
export const edit = () => {
    return {
        type: CREATE_LIST,
    }
}

export const deleteList = () => {
    return {
        type: DELETE_LIST,
    }
}

export const setUpdateAccess = (listUpdateAccess) => {
    return {
        type: UPDATE_LIST_ACESS,
        listUpdateAccess: listUpdateAccess,
    }
}

export const updateList = () => {
    return (dispatch) => {
        dispatch(updateListData());
    }
}

export const updateListData = () => {
    return {
        type: UPDATE_LIST,
    }
}