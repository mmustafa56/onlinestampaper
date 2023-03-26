import { combineReducers } from "redux";
import LogIn from "./LogIn";
import SuccessMessage from './SuccessMessage';
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";
import Bar from "./ChangeBar";
const Reducers = combineReducers({
    LogIn,SuccessMessage,ErrorMessage,Search,Bar
});
export default  Reducers;