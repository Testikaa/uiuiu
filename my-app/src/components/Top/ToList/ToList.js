import React from "react";
import { Link } from "react-router-dom";
import './List.css';
export default function ToList (){
    return(
        <>
        <div className="toList_text"><Link to={`/list`}>К списку</Link></div>
        </>
    )
}