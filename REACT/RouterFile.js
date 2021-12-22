import React from 'react';
import {Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';
//import MyClassComponent from './MyClassComponent';
//import StudentComp from './StudentComp';
//import ProComp from './ProComp';
import ApiGet from './ApiGet';
import Updatepriority from './Updatepriority';
import ApiPost from './ApiPost';
import Trackstatus from './Trackstatus';
import ApiDel from './ApiDel';
import ApiSearch from './ApiSearch';

const routing=(
    <Router>
     <body style={{backgroundColor:"lightcyan"}}>

    <div style={{textAlign:"center"}}>
         
        
    <h1 style={{ backgroundColor:"lightcoral",textAlign:"center",fontSize:"60px"}}>WELCOME TO TASK TRACKING SYSTEM!!</h1>
    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/apig">GET ALL TASKS</Link></button><br></br><br></br>
    
    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/apip">ADD NEW TASK</Link></button>
    
    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/pri">UPDATE PRIORITY OF THE TASK</Link></button><br></br><br></br>

    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/stat">TRACK STATUS OF THE TASKS</Link></button>

    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/sea">SEARCH THE TASK</Link></button><br></br><br></br>

    <button style={{backgroundColor:"lightcoral",padding:"15px 32px"}}><Link to="/del">DELETE THE TASK</Link></button><br></br><br></br>

    <Routes>
        
        <Route path="/apig" element={<ApiGet />}/>
        <Route path="/apip" element={<ApiPost />}/>
        <Route path="/pri" element={<Updatepriority />}/>
        <Route path="/stat" element={<Trackstatus/>}/>
        <Route path="/sea" element={<ApiSearch />}/>
        <Route path="/del" element={<ApiDel />}/>
    </Routes>
    
    </div>
    </body> 
</Router>
    
)
export default routing;