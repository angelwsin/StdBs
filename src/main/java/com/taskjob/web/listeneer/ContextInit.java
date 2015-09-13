package com.taskjob.web.listeneer;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.taskjob.util.SpringUtils;

public class ContextInit implements ServletContextListener{

	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	public void contextInitialized(ServletContextEvent event) {
		// TODO Auto-generated method stub
		 SpringUtils.CONTEXT  = event.getServletContext();
	}

}
