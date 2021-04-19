import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ColorCode from '../Reducers/colorReducer';
import CreateTemplates from '../Reducers/CreateTemplate';
import DilogBox from '../Reducers/DilogReducer';
import CardReducer from '../Reducers/CardReducer';


const root = combineReducers({
    CreateTemplates,ColorCode,DilogBox,CardReducer
});

const store = createStore(root, applyMiddleware(thunk));

export default store;