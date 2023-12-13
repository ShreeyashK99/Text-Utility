import React from 'react'

function Alerts(props) {
    return (
        <div>
            {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type.toUpperCase()}</strong>{props.alert.msg}
            </div>)}
        </div>
    )
}

export default Alerts;
