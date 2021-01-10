import React from 'react';

const DatePicker = ({
    type,
    date,
    setShowCal,
    selectedHourMin
}) => {
    
    const savedDate = new Date(date);
    const month = savedDate.getMonth() + 1;
    const day = savedDate.getDate();
    const year = savedDate.getFullYear();
    const newdate = year + "년 " + month + "월 " + day + "일"
    const hour = savedDate.getHours();
    const min =  Math.floor(savedDate.getMinutes()/10) * 10;
    
    const openCalendar = (event) =>{
        setShowCal(true);
        event.stopPropagation();
    }
    const onChangeHour = (event) =>{
        const temDate = new Date(date);
        temDate.setHours(event.target.value);
        selectedHourMin(type, temDate);
    }
    const onChangeMin = (event) =>{
        const temDate = new Date(date);
        temDate.setMinutes(event.target.value);
        selectedHourMin(type, temDate);
    }

    let hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(<option className="option" key={i} selected={hour == i} value={i}>{i > 12 ? "오후 " + (i-12) + "시": "오전 " + i + "시"}</option>);
    }
    let mins = [];
    for (let i = 0; i < 60; i+=10) {
        mins.push(<option className="option" key={i} selected={min == i} value={i}>{i + " 분"}</option>);
    }
    return (
    <div className="date-picker-wrap" >
        <div >
            <h2>{type == "start" ? "응시 시작일" : "응시 마감일"}</h2>
            <input value={newdate} readOnly="readonly" className="date" onClick={openCalendar} />
            <select className="hour" onChange={onChangeHour}>
                {hours}
            </select>
            <select className="min" onChange={onChangeMin}>
                {mins}
            </select>
        </div>
    </div>
    );
};

export default DatePicker;