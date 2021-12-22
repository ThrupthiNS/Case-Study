import React, { Component } from "react";

import axios from "axios";

class Updatepriority extends Component{

    constructor(props){

        super(props)

        this.state={

            task_id:'',

            priority:''

        }

        this.changeHandler=this.changeHandler.bind(this);

        this.submitHandler=this.submitHandler.bind(this);

    }
    changeHandler=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }

    submitHandler=(event)=>{

        event.preventDefault()

        console.log(this.state)

        axios.get("http://localhost:8080/task_id/"+this.state.task_id+"/priority/"+this.state.priority,this.state)

        .then(response =>{

            console.log(response)

        })

        .catch(error=>{

            console.log(error)

        })

    }
    render(){

        const{task_id,priority} = this.state

        return(

            <div>

                <form onSubmit={this.submitHandler}>

                <div>

TASK ID :

<input type="text" name="task_id" value={task_id} onChange={this.changeHandler}/>

</div>

<div>

PRIORITY :

<select name="priority" value={priority} onChange={this.changeHandler}>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
    </select>

</div>

                    <button type="submit">Submit</button>

                </form>

            </div>

        )

    }

}

export default Updatepriority;