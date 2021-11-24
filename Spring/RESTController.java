package com.example.demo;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {
	
	@Autowired
	TaskInterface task;
	
	@Autowired
	UserInterface user;
	//@GetMapping(value = "/task")

	@RequestMapping(value = "/task", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTask() {
		return task.getAllTasks();
		
	}
	
	//set priority code
	
	@RequestMapping(value ="/taskid/{taskid}/priority/{priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> setPriority(@PathVariable int taskid, @PathVariable String priority, Model model) {
		model.addAttribute("priority",priority );
		model.addAttribute("taskid", taskid);
		int row=task.setPriority(taskid,priority);
		return task.printTask(taskid);
}
	
	//add notes 
	
	@RequestMapping(value ="/taskid/{taskid}/notes/{notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> addNotes(@PathVariable int taskid, @PathVariable String notes, Model model) {
	model.addAttribute("notes",notes );
	model.addAttribute("taskid", taskid);
	
	int row=task.addNotes(taskid,notes);
	return task.printTask(taskid);
	}
	
	// add bookmark
	
	@RequestMapping(value ="/taskid/{taskid}/isBookmarked/{book}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> addBookmark(@PathVariable int taskid,@PathVariable String book, Model model) {
	
	model.addAttribute("taskid", taskid);
	model.addAttribute("isBookmarked", book);
	int row=task.addBookmark(taskid,book);
	return task.printTask(taskid);
	}
	
	//creating a task
	
	@PostMapping(value= "/tasks", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task t) throws Exception
	{
	task.addTask(t);
	return t;

	}
	
	//creating a user
	@PostMapping(value= "/user", consumes = "application/json", produces = "application/json")
	public User addUser(@RequestBody User u) throws Exception
	{
	user.addUser(u);
	return u;

	}
	
	//assignTask
	@RequestMapping(value ="/taskid/{taskid}/ownerid/{ownerid}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> assignTask(@PathVariable int taskid, @PathVariable int ownerid, Model model) {
	model.addAttribute("taskid",taskid );
	model.addAttribute("ownerid",ownerid );
	int row=task.assignTask(taskid,ownerid);
	return task.printTask(taskid);
	}
	
	
	//Searching tasks
	@RequestMapping(value ="/taskid/{taskid}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> searchTask(@PathVariable int taskid, Model model) {
	model.addAttribute("taskid",taskid );
	
	List<Task> row=task.searchTask(taskid);
	return task.printTask(taskid);
	}
	
	//checking Status
	
	@RequestMapping(value ="/status/{status}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> trackTask(@PathVariable String status, Model model) {
	model.addAttribute("status",status );
	
	List<Task> row=task.trackTask(status);
	return task.trackTask(status);
	}
	
	
}
