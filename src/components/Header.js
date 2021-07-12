import React from 'react';

// Title & Subtitle
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {!props.subtitle ? null : <h4>{props.subtitle}</h4>}
            <span>To start. Add an option below in the input field.</span>
        </header>
    );
}
  
// Default props if props aren't passed
Header.defaultProps = {
    subtitle: "some subtitle"
};

export default Header;