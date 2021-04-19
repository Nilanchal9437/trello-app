import { CARD_ACCESS } from '../Constants/CardConstants';


const MyCard = {
    cardIndex : false,
}

export default function CardReducer(state = MyCard, action){
    switch(action.type){
        case CARD_ACCESS:
            return {
                ...state,
                cardIndex : action.cardIndex,
            }
        default:
            return state;
    }
}