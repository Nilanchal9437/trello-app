import { DRAG_LIST_ID, DROP_LIST_ID, CARD_DRAG_ID, CARD_DROP_ID, DND_RESTORE, TEMOPORARY_LIST } from '../Constants/DNDConstants';


export const setDragListId = (listDragId) => {
    return {
        type: DRAG_LIST_ID,
        listDragId: listDragId,
    }
}

export const setDropListId = (listDropId) => {
    return {
        type: DROP_LIST_ID,
        listDropId: listDropId
    }
}

export const setCardDragId = (cardDragId) => {
    return {
        type: CARD_DRAG_ID,
        cardDragId: cardDragId,
    }
}

export const setCardDropId = (cardDropId) => {
    return {
        type: CARD_DROP_ID,
        cardDropId: cardDropId,
    }
}

export const setTemporaryList = (temporaryList) => {
    return {
        type: TEMOPORARY_LIST,
        temporaryList: temporaryList,
    }
}

export const DNDrestore = () => {
    return {
        type: DND_RESTORE,
    }
}

export const setDataRestore = () => {
    return (dispatch) => {
        dispatch(setDragListId(0));
        dispatch(setDropListId(0));
        dispatch(setCardDragId(0));
        dispatch(setCardDropId(0));
        dispatch(setTemporaryList([]));
        
    }
}
