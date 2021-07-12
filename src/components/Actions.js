import React from 'react';

// Buttons

const Action = (props) => {
    return (
        <div className="elCon">
            <button 
                disabled={props.hasOptions ? false : true}
                onClick={props.pickOption}
                className="btn btn-lg btn-primary"
            >What should I do?
            </button>
            <button
                className="btn btn-lg btn-danger"
                onClick={props.deleteOptions}
            >
                Remove All
            </button>
        </div>
    )
}

export default Action;