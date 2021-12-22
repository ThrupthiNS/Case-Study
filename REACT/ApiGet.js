import React, { Component } from "react";
import axios from "axios";

class ApiGet extends Component{
    constructor(props){
        super(props)
        this.state = {
            //task_id: '',
            //owner_id: '',
            //name: ''
            tasks:[]
        }
        this.handleClick= this.handleClick.bind(this)
    }
        handleClick () {
            axios.get('http://localhost:8080/task')
            .then(response=> {this.setState({tasks:response.data})
            console.log(response.data)
        })
        }

        render(){
            const{tasks}=this.state
            return(
                <div>
                    <button className='button' onClick={this.handleClick}>Task Details</button>
                    <h3>DETAILS OF ALL TASKS!!</h3>
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
export default ApiGet;

                    //<p>{this.state.task_id}</p>
                    //<p>{this.state.owner_id}</p>
                    //<p>{this.state.name}</p>