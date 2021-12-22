package com.example.demo;

import java.sql.SQLException;
import java.util.List;

public interface UserInterface {

	public int addUser(User u);
	public boolean login(String u,String p) throws SQLException;
}
