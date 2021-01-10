import { createAction, handleActions } from "redux-actions";
import moment from 'moment';

const PERIOD_CHANGE = "date/PERIOD_CHANGE";
const DATE_CHANGE = 'date/DATE_CHANGE';

export const changePeriod = createAction(PERIOD_CHANGE, period => period);

const initialState = {
    period : {
        start: moment(),
        end: moment(),
    }
    
};
const date = handleActions(
    {
        [PERIOD_CHANGE]: (state, { payload: period }) => ({
            ...state,
            period: period
        }),
    },
    initialState
);

export default date;



