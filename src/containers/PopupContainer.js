import {changePeriod} from "../modules/date";
import React, { useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Popup from '../components/Popup';

const PopupContainer = (props) => {

    const { period } = useSelector(({ date }) => ({
        period: date.period,
    }));
    const dispatch = useDispatch();
    const onChangePeriod = useCallback((period) => dispatch(changePeriod(period)), [
        dispatch
    ]);
    return (
        <Popup
            isShowPopup={props.isShowPopup}
            hidePopup={props.hidePopup}
            period={period}
            onChangePeriod={onChangePeriod}
        />
    );
};

export default PopupContainer;