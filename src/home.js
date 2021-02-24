const Home = () => {

const handleClick= () =>{
    alert("what is your name");
};
    return ( 
        <div className ="home">
        <h1>Home Page</h1>
        <button onClick ={handleClick}>Click Me</button>
        </div>
     );
};
 
export default Home;