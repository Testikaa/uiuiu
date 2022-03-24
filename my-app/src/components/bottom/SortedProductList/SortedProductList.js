import React from "react";
import ProductItem from "../ProductList/ProductItem";
import store from "../../../store/store";
import '../ProductList/style.css';
import { Link } from "react-router-dom";

//тут рисует элементы при клике на категорию
export default class SortedProductList extends React.Component{
    state = ({
        products: [

        ]}
    );
    componentDidMount(){
            const state = store.getState();
            this.setState({products: state.products});

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
    render(){
        return(
            <>
            <ul className="product-list">{
               this.state.products ? this.state.products.filter((item)=>item.category == this.props.category).map((item)=>(
                <li className="product--item" key={item.name} onClick={()=> this.giveInfo(item.id, item.name, item.company, item.poster, item.review)}>
                    <Link to={`/${item.company}/${item.name}`}>
                    <ProductItem {...item} /></Link>
                </li>
                
                )) : false
                }
            </ul>
            </>
        )
    }
}