import { RED, BLUE, GREEN, WHITE, YELLOW } from '../Constants/colorConstants';


const ColorWorld = {
    redColor: "#ff01185c",
    blueColor: "#3ba3ff80",
    greenColor: "#78ff4787",
    whiteColor: "#ffffff",
    yellowColor: "#faff89cf",

}
export default function ColorCode(state = ColorWorld, action) {
    switch (action.type) {
        case RED:
            return {
                ...state,
                redColor : action.redColor,
            }
        case BLUE:
            return {
                ...state,
                blueColor : action.blueColor,
            }
        case GREEN:
            return {
                ...state,
                greenColor : action.greenColor,
            }
        case WHITE:
            return {
                ...state,
                whiteColor : action.whiteColor,
            }
        case YELLOW:
            return {
                ...state,
                yellowColor : action.yellowColor,
            }
        default:
            return state;

    }
}