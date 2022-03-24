import React, {Component} from "react";
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import SearchBox from './components/Top/SearchBox/SearchBox';
import CategoryButton from './components/Top/CategoryBtn/CategoreBtn';
import ToList from './components/Top/ToList/ToList';
import ListPage from './pages/ListPage/ListPage';
import Searched from "./components/bottom/SeachedItems/Serched";
import ProductInfo from "./components/bottom/ProductInfo/ProductInfo";
import List from "./components/Top/ToList/List";
import AddItem from "./components/bottom/AddItem/AddItem";
import './App.css';
export default class App extends Component{
    render(){
        return(
            <div className="app">
                <div className='main-page__lists'>
                    <CategoryButton />
                    <ToList />
                </div>
                <SearchBox />
                <main className="main">
                    <Routes>
                        <Route path='/list' element={<List/>} />
                        <Route path="/create" element={<AddItem />}/>
                        <Route path='/products/:product' element={<Searched />} />
                        <Route path='/list/:category' element={<ListPage />} />
                        <Route path='/' element={< MainPage/>} />
                        <Route path='/:company/:name' element={<ProductInfo/>} />
                    </Routes>
                </main>
                
            </div>
        )
    }
}