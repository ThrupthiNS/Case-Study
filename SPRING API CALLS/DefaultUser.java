package com.example.demo;

import java.sql.PreparedStatement;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class DefaultUser implements UserInterface {

	dbConnection db=new dbConnection();
	@Override
	public int addUser(User u) {
		
		int row=0;
		
		// TODO Auto-generated method stub
		try {
			
			PreparedStatement p=db.getCon().prepareStatement("insert into user values(?,?,?,?,?,?,?,?,?,?,?)");
			
			p.setInt(1,u.getUser_id());
			p.setString(2,u.getUsername());
			p.setString(3,u.getEmail());
			p.setString(4,u.getFirst_name());
			p.setString(5,u.getLast_name());
			p.setLong(6,u.getContact_number());
			p.setString(7,u.getRole());
			p.setBoolean(8,u.isIsactive());
			p.setString(9,u.getDob());
			p.setString(10,u.getCreated_on());
			p.setString(11,u.getPwd());
			
		
			return p.executeUpdate();
		
			}
			catch(Exception e) {System.out.println(e);}
			return row;
	}

	@Override
	public boolean login(String u, String p) throws SQLException{
		// TODO Auto-generated method stub
		
			List<User> e1=new ArrayList<>();
			
			PreparedStatement p1=db.getCon().prepareStatement("select * from user where username=? and pwd=?");
			p1.setString(1, u);
			p1.setString(2, p);
			
			ResultSet rs=p1.executeQuery();
			if(rs.next()) {
			return true;
			
			}
			else return false;
			
			
	}

}
