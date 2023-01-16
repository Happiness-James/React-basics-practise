import React from "react";

function Cards({header,children}) {
    return (
        <>
            <div className="card">
                <h2>{header}</h2>
                {children}
            </div>
        </>
    )
}

export default Cards;