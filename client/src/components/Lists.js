import React from 'react'
import { Link } from 'react-router-dom';
import "./Lists.css";
import Note from "./Note";

function Lists(props) {
    
    // if(props.showList){
    return (     
        <div className="content__lists">  
            {
                props.list.map((item) => (
                    <div className="lists__item" key={item._id}  
                    onClick={()=>{
                            { props.whenClicked(item)} }
                        } >

                       <Note 
                        note={item} 
                        onDelete={(id) => { 
                                {
                                    props.delete_Note(id)} 
                                }}   
                        />
                    </div>
                    ))    
            }
        </div>
    )
}
// else{
//     return (<h1>No List found</h1>)
// }
//}


export default Lists;
