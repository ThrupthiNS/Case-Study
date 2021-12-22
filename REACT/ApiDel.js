import axios from "axios";

import React, { Component } from "react";



class ApiDel extends Component {

    constructor(props){

        super(props)

        this.state = {

            task_id:''


        }

        this.changeHandler=this.changeHandler.bind(this);

        this.submitHandler=this.submitHandler.bind(this);

    }



    changeHandler = (event) => {

        this.setState({[event.target.name]:event.target.value})

    }
    submitHandler = (event) => {

        event.preventDefault()

        console.log(this.state)

        axios.get("http://localhost:8080/task_del/"+this.state.task_id,this.state)

        .then(response => {

            console.log(response)

        })
        
        .catch(error => {

            console.log(error)

        })

    }
    render(){

        const {task_id} = this.state

        return (

           

                        <form  onSubmit={this.submitHandler}>

                            <div>

                                <input type="number" name="task_id" value={task_id} onChange={this.changeHandler} placeholder="Task ID" required/>

                            </div>

                           

                           
                            <button type="submit">Submit</button>

                        </form>

               

        )

    }

}

export default ApiDel