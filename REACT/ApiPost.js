import React, { Component } from "react";

import axios from "axios";

class PostExample extends Component{

    constructor(props){

        super(props)

        this.state={

            task_id:'',
            owner_id:'',
            creator_id:'',
            name:'',
            description:'',
            status:'',
            priority:'',
            notes:'',
            isBookmarked:'',
            created_on:'',
            status_changed_on:''
            
        }

        this.changeHandler=this.changeHandler.bind(this);

        this.submitHandler=this.submitHandler.bind(this);

    }
    changeHandler(e){

        this.setState({[e.target.name]:e.target.value})

    }

    submitHandler(e){

        e.preventDefault()

        console.log(this.state)

        axios.post('http://localhost:8080/tasks',this.state)

        .then(response =>{

            console.log(response)

        })

        .catch(error=>{

            console.log(error)

        })

    }
    render(){

        const{task_id, owner_id,creator_id,name,description,status,priority,notes,isBookmarked,created_on,status_changed_on} = this.state

        return(

            <div style={{textAlign:"center"}}>
                    
                <form onSubmit={this.submitHandler}>

                    <div>

                        TASK ID :

                        <input type="text" name="task_id" value={task_id} onChange={this.changeHandler}/>

                    </div>

                    <div>

                        OWNER ID :

                        <input type="text" name="owner_id" value={owner_id} onChange={this.changeHandler}/>

                    </div>

                    <div>

                        CREATOR ID :

                        <input type="text" name="creator_id" value={creator_id} onChange={this.changeHandler}/>

                    </div>
                    <div>

                        NAME  :

                        <input type="text" name="name" value={name} onChange={this.changeHandler}/>

                    </div>
                    <div>

                        DESCRIPTION :

                        <input type="text" name="description" value={description} onChange={this.changeHandler}/>

                    </div>
                   
                    <div>
                    
                        STATUS :
                        <select name="status" value={status} onChange={this.changeHandler}>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Not Started">Not Started</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            
                            </select>

                    </div>
                   
                    <div>

                        PRIORITY :

                        <select name="priority" value={priority} onChange={this.changeHandler}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            </select>

                    </div>
                    <div>

                    <div>

                        NOTES :

                        <input type="text" name="notes" value={notes} onChange={this.changeHandler}/>

                    </div>

                        IS BOOKMARKED :
                        <select name="isBookmarked" value={isBookmarked} onChange={this.changeHandler}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                            
                            </select>
                            
                 
                            
                        

                    </div>
                    <div>

                        CREATED ON :

                        <input type="date" name="created_on" value={created_on} onChange={this.changeHandler}/>

                    </div>

                    <div>

                         STATUS CHANGED ON :

                        <input type="date" name="status_changed_on" value={status_changed_on} onChange={this.changeHandler}/><br></br>

                    </div><br></br>

                    <button type="submit">Submit</button><br></br><br></br>

                </form>
              

            </div>

        )

    }

}

export default PostExample;