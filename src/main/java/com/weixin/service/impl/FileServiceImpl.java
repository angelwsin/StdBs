package com.weixin.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixin.bean.UploadFile;
import com.weixin.dao.FileDao;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.service.FileService;
import com.weixin.util.Const;
@Service
public class FileServiceImpl implements FileService{
	       @Autowired
            private FileDao fileDao;
	public void upload(InputStream is, String path, String fileName) throws Exception {
		           File file = new File(path);
		           if(!file.exists()){
		        	   file.mkdirs();
		           }
     	            FileOutputStream out  = null;
					 out = new FileOutputStream(new File(file.getPath()+File.separator+fileName));
					  byte[]  buffer = new byte[1024];
					  int temp = 0;
					  while((temp=is.read(buffer))!=-1){
						       out.write(buffer, 0, temp);
					  }
					  if(out!=null){
						  out.close();
					  }
					  if(is!=null){
						   is.close();
					  }
        }
	
	  public UploadFile  wxUpload(InputStream is, String path, String fileName)throws Exception{
		                         upload(is, path, fileName);
		                         UploadFile file = new UploadFile();
		                         file.setAddTime(new Date());
		                         file.setDesc("weixin");
		                         file.setMediaId("000");
		                         file.setThumbMediaId("0000");
		                         file.setTitle("weixin");
		                         file.setType(WXBaseMessage.MSG_IMAGE);
		                         file.setUrl(Const.TEST_PATH+"upload/image/"+fileName);
		                         fileDao.save(file);
		                        return file;
	  }
	}

	    

