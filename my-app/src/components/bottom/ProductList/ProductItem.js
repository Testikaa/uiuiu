import './style.css';

export default function ProductItem (props){
    return(
        <article className="product-item">
            <img className='Pr-Img' src={props.poster} alt={props.name} />
            <h3 className='product-item-title'>{props.name} ({props.company})</h3>
        </article>

    )
}