import React, {Component} from "react";
import store from "../../../store/store";
import ProductItem from "../../bottom/ProductList/ProductItem";
import './List.css';
import { Link } from "react-router-dom";

export default class List extends Component{
    state = {
        products: []
    }
    giveInfo (id, name, company, poster, review){
        console.log(id, review);
        store.dispatch({
            type: 'GIVE_INFO',
            payload:{
                id: id,
                name: name,
                company: company,
                poster: poster,
                review: review
            }
        })
    }
    componentDidMount(){
            const state = store.getState();
            this.setState({products: state.products});
            console.log(state.products);
    }
    render(){
        return(
            <>
                <ul className="list_block">
                    {this.state.products.map((item)=>(
                        item.review ?
                        <li className="list_li" onClick={()=> this.giveInfo(item.id, item.name, item.company, item.poster, item.review)}>
                        <Link to={`/${item.company}/${item.name}`}>
                        <ProductItem {...item} /></Link>
                        </li>
                        :
                        false
                        ))
                    }
                </ul>
            </>
        )
    }
}