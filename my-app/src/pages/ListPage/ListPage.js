import React, { Component} from 'react';
import SortedProductList from '../../components/bottom/SortedProductList/SortedProductList';
import { useParams } from 'react-router-dom';

//отсылает к списку элементов определенной категории
export default function ListPage (){
    const params = useParams();
    const category = params.category;
    return(
            <div className='main-page'>
                <SortedProductList category={category}/>
            </div>
        )
}