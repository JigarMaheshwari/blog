// "use client";
// import { useEffect, useState } from "react";
// // import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
// export default function Page() {
//     const [product, setProduct] = useState([]);
//     useEffect(async () => {
//         let data = await fetch("https://dummyjson.com/products");
//         data = await data.json();
//         setProduct(data.products);
//         console.log(data);
//     }, []);
//     return (
//         <div>
//             <h1> Products List </h1>
//             <table>
//                 <tr>
//                     <th>Title</th>
//                     <th>price</th>
//                     <th>stock</th>
//                     <th>rating</th>
//                     <th>brand</th>
//                     <th>category</th>
//                 </tr>
//                 {
//                     product.map((item) => (
//                         <tr>
//                             <td>{item.title}</td>
//                             <td>{item.price}</td>
//                             <td>{item.stock}</td>
//                             <td>{item.rating}</td>
//                             <td>{item.brand}</td>
//                             <td>{item.category}</td>
//                         </tr>
//                     ))
//                 }
//             </table>

//         </div>
//     )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import Product from "./product";

async function productlist() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}
export default async function page() {
    let products = await productlist();
    console.log(products);
    return (
        <div>
            <h1> Products List </h1>
            <table border="1 solid">
                <tr>
                    <th>Title</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>rating</th>
                    <th>brand</th>
                    <th>category</th>
                    <th>Action</th>
                </tr>
                {
                    products.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.rating}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td> <Product price={item.price} /> </td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

