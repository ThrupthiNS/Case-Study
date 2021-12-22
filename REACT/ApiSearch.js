import React, { Component } from "react";
import axios from "axios";

class ApiSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            tasks:[],
            task_id: ''
        }
        this.handleClick= this.handleClick.bind(this)
    }

    changeHandler = (event) => {

        this.setState({[event.target.name]:event.target.value})

    }
        handleClick () {
            axios.get('http://localhost:8080/task_id/'+this.state.task_id)
            .then(response=>{ this.setState({tasks: response.data})
            console.log(response.data)
            })
        }

        render(){
            const {tasks,task_id}= this.state
            return(
                <div>
                    <form  onSubmit={this.submitHandler}>

<div>

    <input type="number" name="task_id" value={task_id} onChange={this.changeHandler} placeholder="Task ID" required/>

</div>

</form>

                    <button className='button' onClick={this.handleClick}> Task Details</button>

                    <h3> Details of all task</h3>
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
export default ApiSearch;