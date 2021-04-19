import { setTamplateName, setTemplateDesign, useTemplate } from '../Actions/Action';
import { closeDilog } from '../Actions/DilogAction';
import { connect } from "react-redux";
import CreateBoard from '../Components/CreateBoard';
 
const sendData = (dispatch) => ({
    setTempTitle : (tempName) => {
        dispatch(setTamplateName(tempName));
    },
    setTempDesign : (tempID) => {
        dispatch(setTemplateDesign(tempID));
    },
    useTemp : () => {
        dispatch(useTemplate());
    },
    dilogClose : (Open) => {
        dispatch(closeDilog(Open));
    },
});

const reciveData = (state) => ({
    state: state,
});

export default connect(reciveData, sendData)(CreateBoard);
