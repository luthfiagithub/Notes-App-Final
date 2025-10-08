import React from "react";
import { FaSpinner } from "react-icons/fa";


function Loader({ message = "Loading..." }) {
    return (
        <div className="loader-function">
            <FaSpinner className="loader-icon" />
            <p>{message}</p>
        </div>
    );
}

export default Loader;