package com.example.demo;

import java.sql.PreparedStatement;

import org.springframework.stereotype.Component;

@Component
public class DefaultUser implements UserInterface {

	@Override
	public int addUser(User u) {
		
		int row=0;
		dbConnection db=new dbConnection();
		// TODO Auto-generated method stub
		try {
			
			PreparedStatement p=db.getCon().prepareStatement("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
			
			p.setInt(1,u.getUserid());
			p.setString(2,u.getUsername());
			p.setString(3,u.getEmail());
			p.setString(4,u.getFname());
			p.setString(5,u.getLname());
			p.setLong(6,u.getPhno());
			p.setString(7,u.getRole());
			p.setBoolean(8,u.isIsactive());
			p.setString(9,u.getDob());
			p.setString(10,u.getCreated_on());
			p.setString(11,u.getPwd());
			
		
			return p.executeUpdate();
		
			}
			catch(Exception e) {System.out.println(e);}
			return 0;
		
	}

}
