async function userList(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}
export default async function page(){
    let users = await userList();
    console.log(users);
    return (
        <div>
            <h1> Users Name List </h1>
            {
                users.map((item)=>(
                    <div><h3> firstName : {item.firstName}</h3></div>
                ))
            }
        </div>
    )
}