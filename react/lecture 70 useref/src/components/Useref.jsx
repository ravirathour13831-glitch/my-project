import React, { useRef } from 'react';

function Useref() {

    const inputref = useRef(null);

    return (
        <div>
            <input
                type="text"
                ref={inputref}
                placeholder="Enter your name"
            />

            <button onClick={() => {
                inputref.current.focus();

                inputref.current.placeholder = "Yaha apna name dalo";

                inputref.current.style.display = "none";
            }}>
                Click Me
            </button>
        </div>
    );
}

export default Useref;