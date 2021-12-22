import React, { Component } from "react";

import axios from "axios";

class Trackstatus extends Component{

    constructor(props){

        super(props)

        this.state={

            tasks:[],
            status:''
            

        }

        this.changeHandler=this.changeHandler.bind(this);

        this.handleClick=this.handleClick.bind(this);

        //this.submitHandler=this.submitHandler.bind(this);

    }
    changeHandler=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }

    handleClick () {
        axios.get('http://localhost:8080/status/'+this.state.status)
        .then(response=> {this.setState({tasks:response.data})
        console.log(response.data)
    })
}
    render(){

        const{tasks,status} = this.state

        return(

            <div>

                <form onSubmit={this.submitHandler}>

                
<div>

STATUS :
                        <select name="status" value={status} onChange={this.changeHandler}>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Not Started">Not Started</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            
                            </select>

</div>

                    

                </form>

                <button type="submit" onClick={this.handleClick}>Submit</button>

                
                    {
                        tasks.map(task=>

                                <div key={task.task_id}><br/>
                               TASKID: {task.task_id}<br/>
                               OWNERID: {task.owner_id}<br/>
                               CREATORID: {task.creator_id}<br/>
                               NAME: {task.name} <br />
                               DESCRIPTION: {task.description} <br />
                               STATUS: {task.status} <br />
                               PRIORITY: {task.priority} <br />
                               NOTES: {task.notes} <br />                               
                               CREATED_ON: {task.created_on} <br />
                               STATUS_CHANGED_ON: {task.status_changed_on} <br />
                               </div>
                            )
                    }

            </div>

        )

    }

}

export default Trackstatus;