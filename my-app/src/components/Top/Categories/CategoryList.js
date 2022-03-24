import React from "react";
import './catgr.css';
import { Link } from "react-router-dom";

//тут рисует список с названиями категорий
export default class CategoryList extends React.Component{
    state = { 
        categories: [
            {id: 1, name:'milk'},
            {id: 2, name:'chocolate'},
            {id: 3, name:'fruit'},
            {id: 4, name:'meat'}
        ]
        
    }
    
    render(){
        return(
            <>
            <ul className='categoryUL'>{
                this.state.categories.map((item)=>(
                    <li className="category__name">
                        <Link to={`/list/${item.name}`}>{item.name}</Link>
                    </li>
                ))
            }</ul>
            </>
        )
    }
}