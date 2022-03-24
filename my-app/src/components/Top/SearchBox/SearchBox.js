import './style.css';
import store from '../../../store/store';
import React from 'react';
import { Link } from "react-router-dom";

//тут ищем в инпуте
export default class SearchBox extends React.Component{
    state = {
        products: [],
        searchLine: ''
    }
    searchBoxSubmitHandler = (e)=>{
        e.preventDefault();
        store.dispatch({
            type: 'ADD_PRODUCT_ON_PAGE',
            payload: {
                searchLine: this.state.searchLine
            }
        })
    }
    deleteSearchLine = (e) =>{
        e.preventDefault();
        this.setState({searchLine: ''})
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value.toLowerCase()});
    }

    render(){
        return(
        <div className="Search-block">
            <form onSubmit={this.searchBoxSubmitHandler}>
                <Link to={`/products/${this.state.searchLine}`}>
                    <input
                    value={this.state.searchLine}
                    className="SearchInp" 
                    type='text' 
                    placeholder="поиск..."
                    onChange={this.searchLineChangeHandler}/>
                </Link>
                    <button type='button' onClick={this.deleteSearchLine}>x</button>
                    <button type='submit'>Искать</button>
            </form>
        </div>
    )}
}