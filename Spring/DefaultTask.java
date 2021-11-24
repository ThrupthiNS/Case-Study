package com.example.demo;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class DefaultTask implements TaskInterface {

	int row=0;
	dbConnection db=new dbConnection();
//	@Override
//	public Task getTask(int id) {
//		Task t  = new Task();
//		//conntec the db, get the task with id 
//		t.setTaskid(100);
//		t.setTaskname("REST Controller");
//		t.setDesc("Write a rest contrller for getting tasks");
//		return t;
//	}

	
		// method to get all the tasks
	@Override
	public List<Task> getAllTasks() {
		// TODO Auto-generated method stub
		
		 List<Task> e1=new ArrayList<>();
		 try {
				PreparedStatement p1= db.getCon().prepareStatement("select * from task");
				ResultSet rs=p1.executeQuery();
				while(rs.next()) {
					Task us = new Task();
					int taskid= rs.getInt(1);
					int ownerid=rs.getInt(2);
					int creatorid=rs.getInt(3);
					String name= rs.getString(4);
					String descrptn = rs.getString(5);
					String status = rs.getString(6);
					String priority = rs.getString(7);
					String notes = rs.getString(8);
					Boolean isbm = rs.getBoolean(9);
					String sco = rs.getString(11);
					String createdon = rs.getString(10);

					us.setTask_id(taskid);
					us.setOwner_id(ownerid);
					us.setCreator_id(creatorid);
					us.setName(name);
					us.setDescrptn(descrptn);
					us.setStatus(status);
					us.setPriority(priority);
					us.setNotes(notes);
					us.setBookMarked(isbm);
					us.setStatus_changed_on(sco);
					us.setCreated_on(createdon);
					
					e1.add(us);
				}
		 	}
			catch(Exception e) {System.out.println();}
		 	return e1;
	}

	
		// method to set priority
	@Override
	public int setPriority(int taskid,String priority) {
		// TODO Auto-generated method stub
		try {
			Task u =new Task();
			PreparedStatement p=db.getCon().prepareStatement("update task set priority=? where task_id=?");
			p.setString(1,priority);
			p.setInt(2,taskid);
			row=p.executeUpdate();
			db.closeCon();
		}
		catch(Exception e) {System.out.println();}
		return row;
	}

	
	// method to add a task
	@Override
	public int addTask(Task u) {
		// TODO Auto-generated method stub
		
		try {
		
		PreparedStatement p=db.getCon().prepareStatement("insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
		
		p.setInt(1,u.getTask_id());
		p.setInt(2,u.getOwner_id());
		p.setInt(3,u.getCreator_id());
		p.setString(4,u.getName());
		p.setString(5,u.getDescrptn());
		p.setString(6,u.getStatus());
		p.setString(7,u.getPriority());
		p.setString(8, u.getName());
		p.setBoolean(9, u.isBookMarked());
		p.setString(11, u.getStatus_changed_on());
		p.setString(10, u.getCreated_on());

		
		return p.executeUpdate();
	
		}
		catch(Exception e) {System.out.println(e);}
		return 0;
	}
	
	//method to print the task
	
	public List<Task> printTask(int t){
		dbConnection db = new dbConnection();
		List<Task> e1=new ArrayList<>();
		try {
		PreparedStatement p1=db.getCon().prepareStatement("select * from task where task_id=?");
		p1.setInt(1, t);
		ResultSet rs=p1.executeQuery();
		while(rs.next()) {
		Task us = new Task();
		int taskid= rs.getInt(1);
		int ownerid=rs.getInt(2);
		int creatorid=rs.getInt(3);
		String name= rs.getString(4);
		String descrptn = rs.getString(5);
		String status = rs.getString(6);
		String priority = rs.getString(7);
		String notes = rs.getString(8);
		Boolean isbm = rs.getBoolean(9);
		String sco = rs.getString(11);
		String createdon = rs.getString(10);



		us.setTask_id(taskid);
		us.setOwner_id(ownerid);
		us.setCreator_id(creatorid);
		us.setName(name);
		us.setDescrptn(descrptn);
		us.setStatus(status);
		us.setPriority(priority);
		us.setNotes(notes);
		us.setBookMarked(isbm);
		us.setStatus_changed_on(sco);
		us.setCreated_on(createdon);

		e1.add(us);
		}
		}
		catch(Exception e) {System.out.println();}
		return e1;
		}
	
	//method to add notes to tasks

	@Override
	public int addNotes(int taskid,String notes) {
		// TODO Auto-generated method stub
		try {
			Task u =new Task();
			PreparedStatement p=db.getCon().prepareStatement("update task set notes=? where task_id=?");
			p.setInt(2,taskid);
							
			p.setString(1, notes);
			row=p.executeUpdate();
			db.closeCon();
		}
		catch(Exception e) {System.out.println();}
		return row;
	}

	//method to add bookmark to task
	
	@Override
	public int addBookmark(int taskid, String book) {
		// TODO Auto-generated method stub
		try {
			Task u =new Task();
			PreparedStatement p=db.getCon().prepareStatement("update task set  isBookmarked=? where task_id=?");
			p.setInt(2,taskid);
			boolean bool = Boolean.parseBoolean(book);
			p.setBoolean(1, bool);				
			
			row=p.executeUpdate();
			db.closeCon();
		}
		catch(Exception e) {System.out.println();}
		return row;
	}
	
	
	//method to assign task to user
	
	@Override
	public int assignTask(int taskid, int ownerid) {
		// TODO Auto-generated method stub
		try {
			Task u =new Task();
			PreparedStatement p=db.getCon().prepareStatement("update task set owner_id=? where task_id=?");
			p.setInt(1,ownerid);
			p.setInt(2, taskid);
			row=p.executeUpdate();
			db.closeCon();
		}
		catch(Exception e) {System.out.println();}
		return row;
	}
	
	//method to search a task

	@Override
	public List<Task> searchTask(int t) {
		// TODO Auto-generated method stub
		dbConnection db = new dbConnection();
		List<Task> e1=new ArrayList<>();
		try {
		PreparedStatement p1=db.getCon().prepareStatement("select * from task where task_id=?");
		p1.setInt(1, t);
		ResultSet rs=p1.executeQuery();
		while(rs.next()) {
		Task us = new Task();
		int taskid= rs.getInt(1);
		int ownerid=rs.getInt(2);
		int creatorid=rs.getInt(3);
		String name= rs.getString(4);
		String descrptn = rs.getString(5);
		String status = rs.getString(6);
		String priority = rs.getString(7);
		String notes = rs.getString(8);
		Boolean isbm = rs.getBoolean(9);
		String sco = rs.getString(11);
		String createdon = rs.getString(10);



		us.setTask_id(taskid);
		us.setOwner_id(ownerid);
		us.setCreator_id(creatorid);
		us.setName(name);
		us.setDescrptn(descrptn);
		us.setStatus(status);
		us.setPriority(priority);
		us.setNotes(notes);
		us.setBookMarked(isbm);
		us.setStatus_changed_on(sco);
		us.setCreated_on(createdon);

		e1.add(us);
		}
		}
		catch(Exception e) {System.out.println();}
		return e1;
	}
	
	//method to track the status of a task

	@Override
	public List<Task> trackTask(String s) {
		// TODO Auto-generated method stub
		List<Task> e1=new ArrayList<>();
		try {
			
			PreparedStatement p=db.getCon().prepareStatement("select * from task where status=?");
			p.setString(1, s);
			ResultSet rs=p.executeQuery();
			while(rs.next()) {
			Task us = new Task();
			int taskid= rs.getInt(1);
			int ownerid=rs.getInt(2);
			int creatorid=rs.getInt(3);
			String name= rs.getString(4);
			String descrptn = rs.getString(5);
			String status = rs.getString(6);
			String priority = rs.getString(7);
			String notes = rs.getString(8);
			Boolean isbm = rs.getBoolean(9);
			String sco = rs.getString(11);
			String createdon = rs.getString(10);



			us.setTask_id(taskid);
			us.setOwner_id(ownerid);
			us.setCreator_id(creatorid);
			us.setName(name);
			us.setDescrptn(descrptn);
			us.setStatus(status);
			us.setPriority(priority);
			us.setNotes(notes);
			us.setBookMarked(isbm);
			us.setStatus_changed_on(sco);
			us.setCreated_on(createdon);

			e1.add(us);
			}
			}
			catch(Exception e) {System.out.println();}
			return e1;
	}

	
}
		
		
	
	
	


