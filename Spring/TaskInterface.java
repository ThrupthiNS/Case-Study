package com.example.demo;
import java.util.*;

public interface TaskInterface {
	//public Task getTask(int id);
	
	public List<Task> getAllTasks();
	
	public List<Task> printTask(int t);
	
	public int setPriority(int taskid,String priority);
	
	public int addTask(Task u);
	
	public int addNotes(int taskid,String notes);
	
	public int addBookmark(int taskid,String book);
	
	public int assignTask(int userid,int  ownerid);
	
	public List<Task> searchTask(int t);
	
	public List<Task> trackTask(String s);
	
	
}
