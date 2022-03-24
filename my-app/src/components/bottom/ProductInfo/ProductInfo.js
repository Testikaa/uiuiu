import React,{Component} from "react";
import store from '../../../store/store';
import './ProductInfo.css';
//инфа одного продукта

export default class ProductInfo extends Component{
    state = {
            product: [],
            isDisabled: false,
            inputValue: ''
        }
    componentDidMount(){
            const current = store.getState();
            this.setState({
                product: current.product,
                inputValue: current.product.review
            });
    }
    addReview = (e) =>{
        e.preventDefault();
        this.setState({isDisabled: true})
        store.dispatch({
            type: 'ADD_REVIEW',
            payload: {
               inputValue: this.state.inputValue,
               id: this.state.product[0]
            }
        })
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({inputValue: e.target.value})
    }
    deleteReview = (e) =>{
        e.preventDefault();
        this.setState({inputValue: '', isDisabled: false})
        store.dispatch({
            type: 'ADD_REVIEW',
            payload: {
               inputValue: '',
               id: this.state.product[0]
            }
        })
    }
    editReview = (e) =>{
        e.preventDefault();
        this.setState({isDisabled: false})
    }
    render(){
        return(
            <div className="product-info-block">
                {this.state.product && this.state.product.map((item)=>{
                    return(
                        <div className="pi-in_block">
                            <img className="one-item-info-img"  src={item.poster} alt="g"/>
                                <div className="sideText">
                                    <h3>{`${item.name} (${item.company})`}</h3>
                                    <input onChange={this.handleChange} value={this.state.inputValue ? this.state.inputValue : item.review} disabled={this.state.isDisabled}/>
                                      { this.state.isDisabled ?
                                        <>
                                        <button onClick={this.deleteReview}>удалить</button>
                                        <button onClick={this.editReview}>Редактировать</button>
                                        </>
                                        :
                                        <> <button onClick={this.addReview} >добавить</button> </>
                                      }
                                </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}