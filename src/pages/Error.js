import { Link } from "react-router-dom";
import { FaDemocrat } from "react-icons/fa";


const Error = () => {
  return <>
    <section className="error" style={{
    display: "flex",
    backgroundColor:"#00b392",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    height:"100vh"

}}>
    <h1 style={{color:"white",
    fontSize:"100px"
  }}>
    Error Page not Found 404</h1>
    
    < FaDemocrat style={{
    alignContent:"center",
    alignItems:'center',
    justifyContent:'center',
    fontSize:"100px",
    color:"white"
    }} />
    
    <Link to="/" style={{backgroundColor:"rgb(69, 151, 116)",
    padding:10,
    color:"white",
    fontSize:"50px"
  }}>Homepage</Link>
    </section>
  </>;
};

export default Error;
