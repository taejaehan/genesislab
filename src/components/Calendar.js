import React from 'react';
import moment from "moment";
import right from '../res/ic-arrow-forward.svg';
import left from '../res/ic-arrow-backward.svg';

import '../res/Calendar.scss';
function Calendar(props) {
  function generate(props) {
    const startMomonet = moment(props.start);
    const endMomonet = moment(props.end);
    const startWeek = startMomonet.clone().startOf('month').week();
    const endWeek = startMomonet.clone().endOf('month').week() === 1 ? 53 : startMomonet.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(1).map((n, i) => {
              let current = startMomonet.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = startMomonet.format('YYYYMMDD') === current.format('YYYYMMDD') || endMomonet.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isDuration = startMomonet.isBefore(current) && endMomonet.isAfter(current) ? 'selected' : '';
              let isToday = moment().format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
              let isGrayed = current.format('MM') === startMomonet.format('MM') ? '' : 'grayed';

              return (
                <div className={`box`} key={i} onClick={() => props.selectedDate("day",current)}>
                  <span className={`text ${isDuration} ${isSelected} ${isGrayed} ${isToday}`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;
  }
  return (
    <div className="calendar" onClick={(e) => e.stopPropagation()} >
      <div className="head">
        <span className="title" onClick={() => props.selectedDate("month",moment())}>{moment(props.start).format('YYYY년 MM월')}</span>
        <button onClick={() => props.selectedDate("month",moment(props.start).clone().subtract(1, 'month'))}><img src={left} /></button>
        <button onClick={() => props.selectedDate("month",moment(props.start).clone().add(1, 'month'))}><img src={right} /></button>
      </div>
      <div className="body">
        <div className="row">
          <div className="box"><span className="text day">월</span></div>
          <div className="box"><span className="text day">화</span></div>
          <div className="box"><span className="text day">수</span></div>
          <div className="box"><span className="text day">목</span></div>
          <div className="box"><span className="text day">금</span></div>
          <div className="box"><span className="text day">토</span></div>
          <div className="box"><span className="text day">일</span></div>
        </div>
        {generate(props)}
      </div>
    </div>
  )
}

export default Calendar;