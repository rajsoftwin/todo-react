import { combineReducers } from "redux";
import Weatherreducer from "./index";

const reducer = combineReducers({weather : Weatherreducer});



export default reducer;