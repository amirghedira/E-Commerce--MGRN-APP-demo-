
import React from "react";



function IndexHeader() {
    return (
        <div
            className="section-dark "
            style={{
                height: '350px',
                backgroundPositionX: '-50px',
                backgroundPositionY: '-150px',
                backgroundImage:
                    "url(" + require("assets/img/headerpic.png") + ")",
            }}
        >
        </div>
    );
}

export default IndexHeader;
