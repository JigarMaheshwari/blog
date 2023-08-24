'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//Component with props args passing 

// export default function Home() {
//   return (
//     <main className={styles.main}>
// {/* <h1> Component args passing into component </h1> */ }
//       <h1>Home Page</h1>
//       <User name="jigar" />
//       <User />
//       <User name="peter" />
//     </main>
//   )
// }

// const User = (props) =>{
//   return <div>
//     <h2> User name is {props.name} </h2>
//   </div>
// }
/* -----------------------------------------------------------------------------------------------------------------*/

// -------------------------------------------------------------------------------------------------------------------------------------------
// Functions 

// /* How can we call function ? 
// 1. on click event of the button 
// 2. on click event of button passing the args into function
// */
// export default function Home() {
//   /*
// 1. on click event of the button 
//   const apple = () =>{
//     alert("fruit");
//   }
//   */

//   /*
// 2. on click event of button passing the args into function
// const apple = (item) =>{
//   alert(item);
// }
// */
//   return (
//     <main className={styles.main}>
//       <h1>Events, functions and states </h1>
//       {/* <button onClick={apple}> Click Me </button> 1. on click event of the button  */}
//       {/* <button onClick={()=>apple("fruit")}> Click Me </button> 2. on click event of button passing the args into function */}
//     </main>
//   )
// }
// -------------------------------------------------------------------------------------------------------------------------------------------

/*
  States(Usestate)
*/
// export default function Home() {
//   const [name, setName] = useState("Jigar");
//   const apple = (item) => {
//     // normalvariable = "Hello"; //normal variable
//     setName(item); //updating name state with the value which will given us as args into the function call
//   }

//   //making component into another component and calling it into return state
//   const InnerComponent = () => {
//     return (
//       <h1> Inner component </h1>
//     )
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Events, functions and states {name} </h1>
//       <button onClick={() => apple("fruit")}> Click Me </button>
//       <InnerComponent />
//       {/* {InnerComponent()}; //call component as function */}
//     </main>
//   )
// }


// --------------------------------------------------------------------------------------------------------------

/*
Routing - LINK & NAVIGATION 

*/


export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  }
  return (
    <main>
      <h1>Basic Routing - LINK & NAVIGATION</h1>
      <Link href="login"> GO To Login Page </Link> <br />
      <Link href="about"> GO To About Page </Link>
      <br />
      <br />
      <br />
      <button onClick={() => navigate("login")}> Go To Login Page </button> <br />
      <button onClick={() => navigate("about")}> Go To About Page </button>

      <br />
      <br />
      <br />

      <Link href="about/aboutstudent">Go To About Page Of Student</Link>
      <br />
      <Link href="about/aboutcollege">Go To About Page Of College</Link>


      <br />
      <br />
      <br />

      <button onClick={() => navigate("about/aboutstudent")}>Go To About Page Of Student</button>
      <br />
      <button onClick={() => navigate("about/aboutcollege")}> Go To About Page Of College </button>
    </main>
  )
}