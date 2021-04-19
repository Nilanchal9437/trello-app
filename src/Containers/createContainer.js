import { setTamplateName, setTemplateDesign, useTemplate, tempDisplay, tempIndex, deleteTemplate } from '../Actions/Action';
import { openDilog, closeDilog } from '../Actions/DilogAction';
import { connect } from "react-redux";
import CreateNewTemplate from '../Components/Temp';
import { setListTitle } from '../Actions/ListAction';
import { setTemporaryList, setDataRestore  } from '../Actions/DNDActions';

const sendData = (dispatch) => ({
    setTempTitle: (tempName) => {
        dispatch(setTamplateName(tempName));
    },
    setTempDesign: (tempID) => {
        dispatch(setTemplateDesign(tempID));
    },
    useTemp: () => {
        dispatch(useTemplate());
    },
    dilogOpen: (Open) => {
        dispatch(openDilog(Open));
    },
    dilogClose: (Open) => {
        dispatch(closeDilog(Open));
    },
    dispTemp: (displayTemplate) => {
        dispatch(tempDisplay(displayTemplate));
    },
    indexTemp: (frameIndex) => {
        dispatch(tempIndex(frameIndex));
    },
    titleList: (listTitle) => {
        dispatch(setListTitle(listTitle));
    },
    setTempoList: (temporaryList) => {
        dispatch(setTemporaryList(temporaryList));
    },
    setRestoreData: () => {
        dispatch(setDataRestore());
    },
    templateDelete: () => {
        dispatch(deleteTemplate());
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CreateNewTemplate);
