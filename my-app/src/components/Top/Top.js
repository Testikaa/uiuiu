import React from "react";

import CategoreBtn from "./CategoryBtn/CategoreBtn";
import ToList from "./ToList/ToList";
import SearchBox from "./SearchBox/SearchBosx";

import './SearchBox/style.css'
//можно убрать
export default class Top extends React.Component{
    render(){
        return(
            <div className="top-block">
            <CategoreBtn />
            <ToList />
            <SearchBox />
            </div>
        )
    }
}