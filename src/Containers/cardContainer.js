import { setCardTitle, setCardBody, setCardColor, setCardImage, useCard, setCardAccess } from '../Actions/CardAction';
import { closeDilog } from '../Actions/DilogAction';
import CardCreate from '../Components/CreateCard';
import {connect} from 'react-redux';
const sendData = (dispatch) => ({
    cardAccess : (cardIndex) => {
        dispatch(setCardAccess(cardIndex));
    },
    dilogClose: (Open) => {
         dispatch(closeDilog(Open));
    },
    titleCard: (cardTitlte) => {
         dispatch(setCardTitle(cardTitlte));
    },
    bodyCard: (cardBody) => {
         dispatch(setCardBody(cardBody));
    },
    colorCard: (cardColor) => {
         dispatch(setCardColor(cardColor));
    },
    imageCard: (cardImage) => {
         dispatch(setCardImage(cardImage));
    },
    CardNewCreate: () => {
         dispatch(useCard());
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CardCreate);
