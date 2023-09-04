'use client';
 export default function Product(props){
    console.log(props.price);
    return(
        <div>
            <button onClick={()=>alert(props.price)}>Check Price</button>
        </div>
    )
}