
import React from "react";

import { Container } from "reactstrap";


function IndexHeader() {
    return (
        <div
            className="page-header section-dark"
            style={{
                backgroundImage:
                    "url(" + require("assets/img/headerpic.png") + ")",
            }}
        >
        </div>
    );
}

export default IndexHeader;
