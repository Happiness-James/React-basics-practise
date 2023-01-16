import React from "react";

function Button({image,label}) {
    return (
        <>
            <button>
                <span role="img">{image}</span>
                <p>{label}</p>
            </button>
        </>
    )
}
export default Button;