"use client"
import {MyButton} from "./MyButton";
import { Link} from 'react-scroll';

export default function TabItem({tabDetails,isActive,clickEvent}){
    const {fontIcon,fontText} = tabDetails
    
    const handleClick = () => {
        clickEvent(tabDetails);
    };
    
   return (
    <Link className="ml-1 mb-2" activeClass="active" 
    to="order" 
    spy={true} 
    smooth={true} 
    offset={-150} 
    duration={500} >
       <MyButton  className={isActive ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-400 text-sm'} onClick={() => handleClick()} >
          <div className="flex flex-row items-center w-[130px] ml-3 gap-2">
            <div>{fontIcon}</div>
            <p className="text-xs">{fontText}</p>
          </div> 
        </MyButton>
    </Link>
   )
}
