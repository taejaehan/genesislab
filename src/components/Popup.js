import React, { useState } from 'react';
import moment from "moment";
import Calendar from '../components/Calendar';
import DatePicker from '../components/DatePicker';

const Popup = (props) => {
    
    const [showCal, setShowCal] = useState(false);
    const [tempStart, setTempStart] = useState(props.period.start);
    const [tempEnd, setTempEnd] = useState(props.period.end);
    
    const selectedDate = (type, current) =>{
        const isSame = moment(tempStart).isSame(moment(tempEnd));
        // const isMiddle = moment(tempStart).isBefore(current) && moment(tempEnd).isAfter(current);
        const isMiddle = moment(tempStart).isSameOrBefore(current) && moment(tempEnd).isSameOrAfter(current);
        const isBefore = moment(tempStart).isSameOrBefore(current);
        
        //현재 시간으로 설정
        const today = new Date();
        current.set({hour:today.getHours(),minute:today.getMinutes()});

        if(type=="day" && (isSame || isMiddle)){
            if(isBefore){
                setTempEnd(current);
            }else{
                setTempStart(current);
            }
        }else{
            setTempStart(current);
            setTempEnd(current);
        };
    }

    const selectedHourMin = (type, current) =>{
        if(type === 'start'){
            setTempStart(current);
        }else if(type === 'end'){
            setTempEnd(current);
        };
    }

    const onCancel = () => {
        setTempStart(props.period.start);
        setTempEnd(props.period.end);
        props.hidePopup();
    };

    const onSubmit = () => {
        props.period.start = tempStart;
        props.period.end = tempEnd;
        props.onChangePeriod(props.period);
        props.hidePopup();
    };
    
    return (
        <div className = {props.isShowPopup ? "show popup-wrap" : "popup-wrap"} onClick={() => setShowCal(false)}>
            <h1>응시 기간 설정</h1>
            <div className="middle">
                <div className={showCal ? "calendar_box show" : "calendar_box"}>
                    <Calendar 
                        start={tempStart}
                        end={tempEnd} 
                        selectedDate={selectedDate}
                    />
                </div>
                <DatePicker type="start" date={tempStart} setShowCal={setShowCal} selectedHourMin={selectedHourMin} />
                <DatePicker type="end" date={tempEnd} setShowCal={setShowCal} selectedHourMin={selectedHourMin} />
            </div>
            <div className="bottom">
                <button className="cancel" onClick={onCancel}>취소</button>
                <button onClick={onSubmit}>완료</button>
            </div>
        </div>
        
    );
};

export default Popup;