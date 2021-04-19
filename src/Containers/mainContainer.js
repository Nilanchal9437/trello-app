import { connect } from "react-redux";
import CreateList from '../Components/main';
import { setListTitle, setList, deleteList, setUpdateAccess, updateList } from '../Actions/ListAction';
import { setCardAccess, setListIndex, setDeleteIndex, deleteCard } from '../Actions/CardAction';
import { openDilog, closeDilog } from '../Actions/DilogAction';
import { setDragListId, setDropListId, setCardDragId, setCardDropId, setTemporaryList, DNDrestore, setDataRestore } from '../Actions/DNDActions';
import { setCardUpdateAccess } from '../Actions/update/Action';
import { setCardTitle, setCardBody, setCardColor, setCardImage } from '../Actions/CardAction';

const sendData = (dispatch) => ({
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
     titleList: (listTitle) => {
          dispatch(setListTitle(listTitle));
     },
     listCreate: () => {
          dispatch(setList());
     },
     cardAccess: (cardIndex) => {
          dispatch(setCardAccess(cardIndex));
     },
     dilogOpen: (Open) => {
          dispatch(openDilog(Open));
     },
     dilogClose: (Open) => {
          dispatch(closeDilog(Open));
     },
     indexList: (ListIndex) => {
          dispatch(setListIndex(ListIndex));
     },
     dragList: (listDragId) => {
          dispatch(setDragListId(listDragId));
     },
     dropList: (listDropId) => {
          dispatch(setDropListId(listDropId));
     },
     dragCard: (cardDragId) => {
          dispatch(setCardDragId(cardDragId));
     },
     dropCard: (cardDropId) => {
          dispatch(setCardDropId(cardDropId));
     },
     setTempoList: (temporaryList) => {
          dispatch(setTemporaryList(temporaryList));
     },
     dndRestore: () => {
          dispatch(DNDrestore());
     },
     setRestoreData: () => {
          dispatch(setDataRestore());
     },
     listDelete: () => {
          dispatch(deleteList());
     },
     cardItemDeleteIndex: (cardDeleteIndex) => {
          dispatch(setDeleteIndex(cardDeleteIndex));
     },
     cardDelete: () => {
          dispatch(deleteCard());
     },
     updateListAccess: (listUpdateAccess) => {
          dispatch(setUpdateAccess(listUpdateAccess));
     },
     listUpdate: () => {
          dispatch(updateList());
     },
     updateCardAccess: (cardUpdateAccess) => {
          dispatch(setCardUpdateAccess(cardUpdateAccess));
     },
});

const reciveData = (state) => ({
     state: state,
});

export default connect(reciveData, sendData)(CreateList);
