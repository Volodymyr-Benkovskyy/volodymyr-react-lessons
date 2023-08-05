import React from "react";

const Header = ({ isOpen, setIsOpen }) => {

    return (<header>
        <h1>header</h1>
            <button onClick={() => setIsOpen((prev) => !prev)}>
          Click - {`${isOpen}`}
        </button>
    </header>)
}

export default Header;