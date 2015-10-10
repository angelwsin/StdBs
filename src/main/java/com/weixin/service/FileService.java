package com.weixin.service;

import java.io.File;
import java.io.InputStream;

import com.weixin.bean.UploadFile;
import com.weixin.message.bean.WXMessage;

public interface FileService {

	               public File upload(InputStream is,String path,String fileName)throws Exception;
	               public UploadFile  wxUpload(InputStream is, String path, String fileName,String type)throws Exception;
	               public File uploadEventFile(String url,String fileName,WXMessage msg)throws Exception;
}
