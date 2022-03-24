import React from "react";
import store from "../../../store/store";
import './AddItem.css';
//тут форма с добавлением данных и отправкой в стор

export default class AddItem extends React.Component{
    state = {
        name:'',
        company: '',
        category: '',
        poster: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        store.dispatch({
            type: 'ADD_ITEM',
            payload: {
                name: this.state.name,
                company: this.state.company,
                category: this.state.category,
                poster: this.state.poster ? this.state.poster : ''
            }
        })
        alert('Готовo')
    }
    handleChangeName = (e) =>{
        this.setState({name: e.target.value})
    }
    handleChangeCompany = (e) =>{
        this.setState({company: e.target.value})
    }
    handleChangeCategory = (e) =>{
        this.setState({category: e.target.value})
    }
    handleChangePoster = (e) =>{
        this.setState({poster: e.target.value})
    }
    render(){
        return(
            <div className="add_block">
                <form onSubmit={this.handleSubmit} className='add_form'>
                    <h3>Добавь свой вариант</h3>
                    <label>название продукта: <input value={this.state.name} onChange={this.handleChangeName} required/></label><br/>
                    <label>бренд: <input value={this.state.company} onChange={this.handleChangeCompany} required/></label><br/>
                    <label>категория: <input value={this.state.category} onChange={this.handleChangeCategory}/></label><br/>
                    <label>постер: <input value={this.state.poster} onChange={this.handleChangePoster}/></label><br/>
                    <button type="submit">отправить форму</button>
                </form>
            </div>
        )
    }
}