package com.example.demo;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Task {
	//private int taskid;
	//private String taskname;
	//private String desc;
	private int task_id;
	private int owner_id;
	private int creator_id;
	private String name;
	private String descrptn;
	private String status;
	private String priority;
	private String notes;
	private boolean isBookMarked;
	private String created_on;
	private String status_changed_on;
	public int getTask_id() {
		return task_id;
	}
	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	public int getOwner_id() {
		return owner_id;
	}
	public void setOwner_id(int owner_id) {
		this.owner_id = owner_id;
	}
	public int getCreator_id() {
		return creator_id;
	}
	public void setCreator_id(int creator_id) {
		this.creator_id = creator_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescrptn() {
		return descrptn;
	}
	public void setDescrptn(String descrptn) {
		this.descrptn = descrptn;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public boolean isBookMarked() {
		return isBookMarked;
	}
	public void setBookMarked(boolean isBookMarked) {
		this.isBookMarked = isBookMarked;
	}
	public String getCreated_on() {
		return created_on;
	}
	public void setCreated_on(String created_on) {
		this.created_on = created_on;
	}
	public String getStatus_changed_on() {
		return status_changed_on;
	}
	public void setStatus_changed_on(String status_changed_on) {
		this.status_changed_on = status_changed_on;
	}
	@Override
	public String toString() {
		return "Task [task_id=" + task_id + ", owner_id=" + owner_id + ", creator_id=" + creator_id + ", name=" + name
				+ ", descrptn=" + descrptn + ", status=" + status + ", priority=" + priority + ", notes=" + notes
				+ ", isBookMarked=" + isBookMarked + ", created_on=" + created_on + ", status_changed_on="
				+ status_changed_on + "]";
	}
	
	
	
	}
	
//	public String getTaskname() {
//		return taskname;
//	}
//	public void setTaskname(String taskname) {
//		this.taskname = taskname;
//	}
//	public String getDesc() {
//		return desc;
//	}
//	public void setDesc(String desc) {
//		this.desc = desc;
//	}
//	public int getTaskid() {
//		return taskid;
//	}
//	public void setTaskid(int taskid) {
//		this.taskid = taskid;
//	}
	
	
		

