package com.weixin.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weixin.bean.UploadFile;
import com.weixin.dao.FileDao;
import com.weixin.message.bean.WXBaseMessage;
import com.weixin.message.bean.WXMessage;
import com.weixin.service.FileService;
import com.weixin.util.Const;
import com.weixin.util.HttpClientUtils;
import com.weixin.util.JSONUtil;
@Service
public class FileServiceImpl implements FileService{
	       @Autowired
            private FileDao fileDao;
	public File upload(InputStream is, String path, String fileName) throws Exception {
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
					  return file;
        }
	
	  @SuppressWarnings("unchecked")
	public UploadFile  wxUpload(InputStream is, String path, String fileName,String type)throws Exception{
		                      File filep =   upload(is, path, fileName);
		                  	   Map<String,String> params = new HashMap<String,String>();
		                  	   params.put("access_token", TokenService.acessToken());
		                  	   params.put("type", type);
		          		 String res=HttpClientUtils.upload("https://api.weixin.qq.com/cgi-bin/media/upload", filep, params,true);
		          		        Map<String,Object> result = JSONUtil.getJsonT(res, Map.class);
		                         UploadFile file = new UploadFile();
		                         file.setAddTime(new Date());
		                         file.setDesc("weixin");
		                         file.setMediaId((String)result.get("media_id " ));
		                         file.setThumbMediaId("0000");
		                         file.setTitle("weixin");
		                         file.setType(WXBaseMessage.MSG_IMAGE);
		                         file.setUrl(Const.TEST_PATH+"upload/image/"+fileName);
		                         fileDao.save(file);
		                        return file;
	  }

	public File uploadEventFile(String  url, String fileName,WXMessage msg) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(msg.getMsgType());
		String path = Const.contextPath+"upload/image/";
		File filep =   upload(HttpClientUtils.downLoad(url,null), path, fileName);
		UploadFile file = new UploadFile();
        file.setAddTime(new Date());
        file.setDesc("weixin");
        file.setMediaId("00");
        file.setThumbMediaId("0000");
        file.setTitle("weixin");
        file.setType(msg.getMsgType());
        file.setUrl(Const.TEST_PATH+Const.UPLOAD_DIR.get(msg.getMsgType())+fileName);
        fileDao.save(file);
		return filep;
	}

	
	}

	    

