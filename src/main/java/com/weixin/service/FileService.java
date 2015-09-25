package com.weixin.service;

import java.io.File;
import java.io.InputStream;

import com.weixin.bean.UploadFile;

public interface FileService {

	               public File upload(InputStream is,String path,String fileName)throws Exception;
	               public UploadFile  wxUpload(InputStream is, String path, String fileName,String type)throws Exception;
}
