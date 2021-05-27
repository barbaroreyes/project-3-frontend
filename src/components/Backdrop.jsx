import React from "react";

import "../styles/Style.css";

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;