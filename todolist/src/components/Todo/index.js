
import React,  {useState}  from 'react'
import "./stayle.css"
import Todoitem from '../todoitem'
const Todo = (props)=> {
  


  const [todo,settodo]=useState( [{id:1, name:'plaey'},
  {id:2,name:"sleep"},])
   


}


  
  handleSubmit =(e) =>{
    e.preventDefault()
    const obj= {
        id: state.todos.length +1,
        name:e.target.taxt.value

    }
    
    setState({
   todos: [...state.todos,obj]
       
    });
    e.target.taxt.value ="";
  };

  handDelet =(id)=>{
    setState({ todos:state.todos.filter((obj)=>obj.id != id)
    });
  };
  
    
        return (
            <div className="todo">
                <form  onSubmit={handleSubmit}>
                    <input type="text"name="taxt" onChange={handleChange} />
                        <button> Add task</button>
                </form>
                <ul> 
                   {this.state.todos.map((todo,i)=>(
                     <li>
                     <h3>{todo.name}</h3>
                     <h3 onClick={()=>{handDelet(todo.id)}}className="handDelet" >X</h3>
                 </li>
                   ))}  
                </ul>   
            </div>
        );
                   
                  }
                  
                            
        
  





