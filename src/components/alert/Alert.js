import React from 'react';
import AlertCss from "./Alert.module.css";

const Alert = ({alert}) => {
    return (
        <>
            <div className={`${AlertCss.alert} ${ AlertCss.alert}`}>
                {alert.show ? alert.text : alert.text= "todo remove"}
            </div>
        
        </>
    )
}

export default Alert