import React from 'react';

import Option from './Option';

// All Options

const Options = (props) => {
    const options = props.options;
    return (
        <div>
            <ol>
            {
                options.map((option) => {
                    return <Option 
                        value={option}
                        key={option}
                        deleteSingleOption={props.deleteSingleOption}
                    />
                })
            }
            </ol>
        </div>
    );
}

export default Options;