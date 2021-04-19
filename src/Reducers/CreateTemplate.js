import { TEMPLATE_NAME, TEMPLATE_DESIGN1, TEMPLATE_DESIGN2, TEMPLATE_LIST, TEMPLATE_DISPLAY,FRAME_INDEX, DELETE_TEMPLATE } from '../Constants/contants';
import { LIST_TITLE, CREATE_LIST, DELETE_LIST, UPDATE_LIST_ACESS, UPDATE_LIST } from '../Constants/ListConstant';
import { CARD_TITLE, CARD_BODY, CARD_COLOR, CARD_IMAGE, CREATE_CARD, LIST_INDEX, DELETE_CARD, CARD_DELETE_INDEX, UPDATE_CARD_ACCESS, CARD_UPDATE } from '../Constants/CardConstants';
import { DRAG_LIST_ID, DROP_LIST_ID, CARD_DRAG_ID, CARD_DROP_ID, DND_RESTORE, TEMOPORARY_LIST} from '../Constants/DNDConstants';





const TemplateData = {
    // This is the template Part.
    tempName: "",
    tempDesign1: ['stars', 'stars2', 'stars3'],
    tempDesign2: ['sky-container2', 'star', 'star', 'star', 'star', 'star', 'star'],
    tempList: [],
    tempID: 0,

    //This is the frame part.
    displayTemplate: false,
    frameIndex: 0,

    //This is multiple list part.
    listTitle : "",
    listUpdateAccess: false,
    
    //This is Multiple Card Design Part.
    cardTitlte : "",
    cardBody : "",
    cardImage : "",
    cardColor : "",
    ListIndex : 0,
    cardCeateIndex : 0,
    cardDeleteIndex: 0,
    cardUpdateAccess: false,

    //This is Drag and drop part.
    temporaryList: [],
    listDragId: 0,
    listDropId: 0,
    cardDragId: 0,
    cardDropId: 0,
    

}

export default function CreateTemplates(state = TemplateData, action){
    switch(action.type){
        case TEMPLATE_NAME:
            return {
                ...state,
                tempName: action.tempName,
            }
        case TEMPLATE_DESIGN1:
            return {
                ...state,
                tempID: action.tempID,
            }
        case TEMPLATE_DESIGN2:
            return {
                ...state,
                tempID: action.tempID,
            }
        case TEMPLATE_LIST:
            if(state.tempID === 1){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign1,
                    LIST : [],
                })
            }
            else if(state.tempID === 2){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign2,
                    LIST : [],
                })
            }
            else if(state.tempID === 3){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign1,
                    LIST : [],
                })
            }
            else if(state.tempID === 4){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign1,
                    LIST : [],
                })
            }
            else if(state.tempID === 5){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign1,
                    LIST : [],
                })
            }
            else if(state.tempID === 6){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID, 
                    DESIGN : state.tempDesign1,
                    LIST : [],
                })
            }
            else if(state.tempID === 7){
                state.tempList.push({
                    TEMPLATE : state.tempName, 
                    ID : state.tempID,
                    LIST : [],
                })
            }
            else{
                state.tempList.push({
                    TEMPLATE : state.tempName,
                    LIST : [],
                })
            }
            return {
                ...state,
            }
        case TEMPLATE_DISPLAY:
            return {
                ...state,
                displayTemplate: action.displayTemplate,
            }
        case FRAME_INDEX:
            return {
                ...state,
                frameIndex: action.frameIndex,
            }
        case LIST_TITLE:
            return {
                ...state,
                listTitle : action.listTitle
            }
        case CREATE_LIST:
            state.tempList[state.frameIndex].LIST.push({LISTNAME : state.listTitle, CARDITEMS : []});
            return {
                ...state,
            }
        case CARD_TITLE:
            return {
                ...state,
                cardTitlte : action.cardTitlte,
            }
        case CARD_BODY:
            return {
                ...state,
                cardBody : action.cardBody,
            }
        case CARD_IMAGE:
            return {
                ...state,
                cardImage : action.cardImage,
            }
        case CARD_COLOR:
            return {
                ...state,
                cardColor : action.cardColor,
            }
        case LIST_INDEX:
            return {
                ...state,
                ListIndex: action.ListIndex,
            }
        case CREATE_CARD:
            state.tempList[state.frameIndex].LIST[state.ListIndex].CARDITEMS.push({
                CARDID : (''+state.cardCeateIndex+''+state.frameIndex+''+state.ListIndex+''),
                CARDTITLE : state.cardTitlte,
                CARDBODY : state.cardBody,
                CARDIMAGE : state.cardImage,
                CARDCOLOR : state.cardColor
            });
            state.cardCeateIndex += 1;
            return {
                ...state,
            }
        case DRAG_LIST_ID:
            return {
                ...state,
                listDragId: action.listDragId,
            }
        case DROP_LIST_ID:
            return {
                ...state,
                listDropId: action.listDropId,
            }
        case CARD_DRAG_ID:
            return {
                ...state,
                cardDragId: action.cardDragId,
            }
        case CARD_DROP_ID:
            return {
                ...state,
                cardDropId: action.cardDropId,
            }
        case TEMOPORARY_LIST:
            return {
                ...state,
                temporaryList: action.temporaryList,
            }
        case DND_RESTORE:
            const [recordedItems] = state.temporaryList[state.frameIndex].LIST[state.listDragId].CARDITEMS.splice(state.cardDragId, 1);
            state.temporaryList[state.frameIndex].LIST[state.listDropId].CARDITEMS.splice(state.cardDropId, 0, recordedItems);
            return {
                ...state,
            }
        case UPDATE_LIST_ACESS:
            return {
                ...state,
                listUpdateAccess: action.listUpdateAccess,
            }
        case UPDATE_LIST:
            state.temporaryList[state.frameIndex].LIST[state.ListIndex]['LISTNAME'] = state.listTitle;
            return {
                ...state,
            }
        case UPDATE_CARD_ACCESS:
            return {
                ...state,
                cardUpdateAccess: action.cardUpdateAccess,
            }
        case CARD_UPDATE:
            state.temporaryList[state.frameIndex].LIST[state.ListIndex].CARDITEMS[state.cardDeleteIndex]['CARDTITLE'] = state.cardTitlte;
            state.temporaryList[state.frameIndex].LIST[state.ListIndex].CARDITEMS[state.cardDeleteIndex]['CARDBODY'] = state.cardBody;
            state.temporaryList[state.frameIndex].LIST[state.ListIndex].CARDITEMS[state.cardDeleteIndex]['CARDIMAGE'] = state.cardImage;  
            state.temporaryList[state.frameIndex].LIST[state.ListIndex].CARDITEMS[state.cardDeleteIndex]['CARDCOLOR'] = state.cardColor;
            return {
                ...state,
            }
        case DELETE_TEMPLATE:
            state.temporaryList.splice(state.frameIndex, 1);
            return {
                ...state,
            }
        case DELETE_LIST:
            state.temporaryList[state.frameIndex].LIST.splice(state.ListIndex, 1);
            return {
                ...state,
            }
        case CARD_DELETE_INDEX:
            return {
                ...state,
                cardDeleteIndex: action.cardDeleteIndex,
            }
        case DELETE_CARD:
            state.temporaryList[state.frameIndex].LIST[state.ListIndex].CARDITEMS.splice(state.cardDeleteIndex, 1);
            return {
                ...state,
            }
        default:
            return state;
    }
}

