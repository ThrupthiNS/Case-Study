package com.example.demo;
import java.util.*;

public interface TaskInterface {
	//public Task getTask(int id);
	
	public List<Task> getAllTasks();
	
	public List<Task> printTask(int t);
	
	public int setPriority(int task_id,String priority);
	
	public int addTask(Task u);
	
	public int addNotes(int task_id,String notes);
	
	public int addBookmark(int task_id,String book);
	
	public int assignTask(int user_id,int  owner_id);
	
	public List<Task> searchTask(int t);
	
	public List<Task> trackTask(String s);
	
	public int deleteTask(int task_id);
	
}
