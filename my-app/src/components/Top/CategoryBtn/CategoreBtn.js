import React, { useState } from "react";
import './style.css';
import CategoryList from '../Categories/CategoryList';
//кнопа вызвать список с названиями категорий

export default function CategoryBtn (){
    const [shown, setshown] = useState(false);
    const onClick = (e) =>{
        e.preventDefault();
        setshown(!shown);
    }
   const onHandleBlur = () =>{
        setshown(false);
    }
    return(
        <div className="reltv">
        <button className="catBtn" onClick={onClick}>Категории</button>
        {shown ? <div onBlur={onHandleBlur}><CategoryList /></div>  : false}
        </div>
    )
}