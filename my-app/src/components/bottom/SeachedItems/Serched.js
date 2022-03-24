import React from "react";
import store from "../../../store/store";
import { Link } from "react-router-dom";
import ProductItem from "../ProductList/ProductItem";
import './Searched.css';
//при поиске. найденные элементы
export default class Searched extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searched: []
        }
    }
    componentDidMount(){
        console.log(this.state.searched);
        store.subscribe(()=>{
            const state = store.getState();
            this.setState({searched: state.searched});
            console.log(this.state.searched)
        })
    }
    giveInfo (id, name, company, poster, review){
        console.log(id);
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
        console.log(this.state.searched)
        return(
            <>
            {
                this.state.searched[0] == undefined ?
                <div className="searched_add_block">
                    <div className='searched_add_text'>Если продукта нет, Вы можете добавить его вручную:</div>
                    <div className="searched_add_button"><Link to='/create'>Добавить</Link></div>
                </div>
                :
                <ul className="product-list">{
                    this.state.searched.map((item)=>(
                        <li className="product__item" key={item.name} onClick={()=> this.giveInfo(item.id, item.name, item.company, item.poster, item.review)}><Link to={`/${item.company}/${item.name}`}><ProductItem {...item}/></Link></li>
                    ))
                    }
                </ul>
                
            }
            </>
        )
    }
}