import React from "react";
import {BackButton} from "../../utils/BackButton/BackButton";

import './NotFoundView.css'

export const NotFoundView = () => (
    <div className="NotFoundView">
        <h1>Oho chyba się zgubiliśmy ...</h1>
        <h2>Lepiej wróć do nauki ;)</h2>
        <BackButton/>
    </div>
)
