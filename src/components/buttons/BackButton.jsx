import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}>
            <FaChevronLeft />
        </button>
    );
}

export default BackButton;