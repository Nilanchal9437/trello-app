import { TEMPLATE_NAME, TEMPLATE_DESIGN1, TEMPLATE_DESIGN2, TEMPLATE_LIST, TEMPLATE_DISPLAY,FRAME_INDEX, DELETE_TEMPLATE } from '../Constants/contants';

export const setTamplateName = (tempName) => {
    return {
        type: TEMPLATE_NAME,
        tempName: tempName,
    }
}

export const setTemplateDesign = (tempID) => {
    if(tempID === 1){
        return {
            type: TEMPLATE_DESIGN1,
            tempID: tempID,
        }
    }
    if(tempID === 2){
        return {
            type: TEMPLATE_DESIGN2,
            tempID: tempID,
        }
    }
    else{
        return {
            type: TEMPLATE_DESIGN1,
            tempID: tempID,
        }
    }
}

export const useTemplate = () => {
   return (dispatch) => {
       dispatch(templateEdit());
       dispatch(setTemplateDesign(0));
       dispatch(setTamplateName(''));
   }
}

export const templateEdit = () => {
    return {
        type: TEMPLATE_LIST,
    }
}
export const tempDisplay = (displayTemplate) => {
    return {
        type: TEMPLATE_DISPLAY,
        displayTemplate: displayTemplate,
    }
}


export const tempIndex = (frameIndex) => {
    return {
        type: FRAME_INDEX,
        frameIndex: frameIndex,
    }
}

export const deleteTemplate = () => {
    return {
        type: DELETE_TEMPLATE,
    }
}