import { closeDilog } from '../Actions/DilogAction';
import { setCardTitle, setCardBody, setCardColor, setCardImage } from '../Actions/CardAction';
import { connect } from "react-redux";
import CardUpdate from '../Components/UpdateCard';
import { setCardUpdateAccess, updateCard } from '../Actions/update/Action';

const sendData = (dispatch) => ({
    titleCard : (cardTitlte) => {
        dispatch(setCardTitle(cardTitlte));
    },
    bodyCard : (cardBody) => {
        dispatch(setCardBody(cardBody));
    },
    colorCard : (cardColor) => {
        dispatch(setCardColor(cardColor));
    },
    imageCard : (cardImage) => {
        dispatch(setCardImage(cardImage));
    },
    dilogClose : (Open) => {
        dispatch(closeDilog(Open));
    },
    updateCardAccess : (cardUpdateAccess) => {
        dispatch(setCardUpdateAccess(cardUpdateAccess));
    },
    cardUpdate : () => {
        dispatch(updateCard());
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CardUpdate);