package com.example.demo;

import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins="http://localhost:4200/")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class RESTController {
	
	@Autowired
	TaskInterface task;
	
	@Autowired
	UserInterface user;
	//@GetMapping(value = "/task")
	
	//get all tasks -done
	
	@RequestMapping(value = "/task", method = RequestMethod.GET,produces = {"application/json"})
	public List<Task> getTask() {
		return task.getAllTasks();
		
	}
	
	//set priority code-done
	
	@RequestMapping(value ="/task_id/{task_id}/priority/{priority}",method = RequestMethod.GET,produces = {"application/json"})
	public List<Task> setPriority(@PathVariable int task_id, @PathVariable String priority, Model model) {
		model.addAttribute("priority",priority );
		model.addAttribute("task_id", task_id);
		int row=task.setPriority(task_id,priority);
		return task.printTask(task_id);
}
	
	//add notes -done
	
	@RequestMapping(value ="/task_id/{task_id}/notes/{notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> addNotes(@PathVariable int task_id, @PathVariable String notes, Model model) {
	model.addAttribute("notes",notes );
	model.addAttribute("task_id", task_id);
	
	int row=task.addNotes(task_id,notes);
	return task.printTask(task_id);
	}
	
	// add bookmark-done
	
	@RequestMapping(value ="/task_id/{task_id}/isBookmarked/{book}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> addBookmark(@PathVariable int task_id,@PathVariable String book, Model model) {
	
	model.addAttribute("task_id", task_id);
	model.addAttribute("isBookmarked", book);
	int row=task.addBookmark(task_id,book);
	return task.printTask(task_id);
	}
	
	//creating a task-done
	
	@PostMapping(value= "/tasks", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task t) throws Exception
	{
	task.addTask(t);
	return t;

	}
	
	//creating a user-done
	@PostMapping(value= "/user", consumes = "application/json", produces = "application/json")
	public User addUser(@RequestBody User u) throws Exception
	{
	user.addUser(u);
	return u;

	}
	
	//assignTask-done
	@RequestMapping(value ="/task_id/{task_id}/owner_id/{owner_id}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> assignTask(@PathVariable int task_id, @PathVariable int owner_id, Model model) {
	model.addAttribute("taskid",task_id );
	model.addAttribute("ownerid",owner_id );
	int row=task.assignTask(task_id,owner_id);
	return task.printTask(task_id);
	}
	
	
	//Searching tasks-done
	@RequestMapping(value ="/task_id/{task_id}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> searchTask(@PathVariable int task_id, Model model) {
	model.addAttribute("task_id",task_id );
	
	List<Task> row=task.searchTask(task_id);
	return task.printTask(task_id);
	}
	
	//checking Status-done
	
	@RequestMapping(value ="/status/{status}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> trackTask(@PathVariable String status, Model model) {
	model.addAttribute("status",status );
	
	List<Task> row=task.trackTask(status);
	return task.trackTask(status);
	}
	
	//logging in to user-done
	@RequestMapping(value ="/username/{username}/pwd/{pwd}",method = RequestMethod.GET,produces = {"application/json"})
	public boolean login(@PathVariable String pwd, @PathVariable String username, Model model) throws SQLException {
	model.addAttribute("username",username);
	model.addAttribute("pwd", pwd);
	return user.login(username, pwd);
	}
	
	//delete the task-done
	
	@RequestMapping(value ="/task_del/{task_id}",method = RequestMethod.GET,produces = {"application/json"})
	public int deleteTask(@PathVariable int task_id, Model model) {
		
		model.addAttribute("task_id", task_id);
		int row=task.deleteTask(task_id);
		return row;
}
	
	
	
}
