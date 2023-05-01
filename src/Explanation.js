import React from "react";
import { useState } from "react";
import "./Header.css";

const Explanation = (props) => {

    const {aciklama} = props

    return (
            <div className="Aciklama">
                <p>{aciklama}</p>
            </div>
    )

}

export default Explanation;