package com.weixin.service;

import java.io.InputStream;

import com.weixin.bean.UploadFile;

public interface FileService {

	               public void upload(InputStream is,String path,String fileName)throws Exception;
	               public UploadFile  wxUpload(InputStream is, String path, String fileName)throws Exception;
}
