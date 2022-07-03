import { useState } from 'react';
import  {BiAlignJustify} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { navbar } from '../data/navbar';


const Menu = () => {
  const [isOpen, setIsOpen]=useState(false);
  const [links, setLinks] = useState(navbar);

  return (
    <>
    <div className='menu-btn' >   
      <button onClick={()=> setIsOpen(!isOpen)} >
        < BiAlignJustify />
      </button>
    </div>
  
<header className={`${isOpen ? "header open" : "header"}`}>
   <nav>
    <ul>
       {links.map((link)=>{
        return(
          <li key={link.id} onClick={()=>setIsOpen(false)}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        )
       })} 
    </ul>
   </nav>
  </header> 
 
  
  </>
  )
};

export default Menu;
