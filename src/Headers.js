import React from "react";
import { useState } from "react";
import "./Header.css";

const Headers = (props) => {

    const { veri } = props

    return (
        <div>
            <h1>NASA APOD</h1>
            <p>Astronomy Picture of the Day </p>
            <h2>{veri.title}</h2>
        </div>
    )

}

export default Headers;