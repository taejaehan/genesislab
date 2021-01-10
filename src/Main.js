import React, { useState } from 'react';
import PopupContainer from "./containers/PopupContainer";
import back from './res/back.png';

const Main = () => {

    const [isShowPopup, setIsShowPopup] = useState(false);
    const showPopup = () =>{
        setIsShowPopup(true);
    }
    const hidePopup = () =>{
        setIsShowPopup(false);
    }
    
    return (
        <div className="main-container">
            <img src={back} />
            <button className="btn-open" onClick={showPopup}>설정 대화상자 열기</button>
            <div className={isShowPopup ? "show overlay" : "overlay"} onClick={hidePopup}></div>
            <PopupContainer isShowPopup={isShowPopup} hidePopup={hidePopup}/>
        </div>
    );
};

export default Main;