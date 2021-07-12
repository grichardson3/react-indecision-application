import React from 'react';

// Single Options

const Option = (props) => {
    return (
        <div className="inline">
            <li>{props.value}</li>
            <button
                className="removeButton btn btn-danger"
                onClick={(e) => {
                    props.deleteSingleOption(props.value);
                }}
            >
            Remove
            </button>
        </div>
    )
}

export default Option;