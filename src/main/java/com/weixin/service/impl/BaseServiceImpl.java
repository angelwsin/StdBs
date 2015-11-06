package com.weixin.service.impl;



import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weixin.bean.Page;
import com.weixin.dao.BaseDao;
import com.weixin.service.BaseService;
import com.weixin.util.ObjectUtils;

@Service("baseService")
public class BaseServiceImpl<T> implements BaseService<T>{
	        @Resource(name="baseDao")
	        private BaseDao<T> baseDao;

			public void save(T entity) {
				// TODO Auto-generated method stub
				baseDao.save(entity);
			}

			public List<T> queryAll(String clazz) {
				// TODO Auto-generated method stub
				return baseDao.findAll(clazz);
			}

			public List<T> queryByPage(String clazz, Page<T> page) {
				// TODO Auto-generated method stub
				String hql = "from "+clazz;
				page.setTotal(baseDao.getTotalRows(hql));
				page.setTotalPage(page.getCountPage());
                return baseDao.queryByPage(hql, page);
			}

			public void del(T entity) {
				// TODO Auto-generated method stub
				baseDao.del(entity);
			}

			public List<T> queryByPage(String clazz, Page<T> page, Map<String, Object> params) {
				// TODO Auto-generated method stub
				StringBuffer hql = new StringBuffer("from ").append(clazz);
				 if(params!=null&&params.keySet().size()>0){
					 hql.append(" where 1=1 ");
					 for(String key:params.keySet()){
						 hql.append(" and ").append(key).append("=").append(":").append(key);
					 }
				 }
				 System.out.println(hql.toString());
				page.setTotal(baseDao.getTotalRows(hql.toString(),params));
				page.setTotalPage(page.getCountPage());
                return baseDao.queryByPage(hql.toString(), page,params);
			}

			public List<T> queryByPage(String clazz, Page<T> page, Object bean) {
				// TODO Auto-generated method stub
				String hql = "from "+clazz;
				page.setTotal(baseDao.getTotalRows(hql));
				page.setTotalPage(page.getCountPage());
                return baseDao.queryByPage(hql, page,bean);
			}

			public void del(String classBean, Map<String, Object> requestMap) {
				// TODO Auto-generated method stub
				String hql = "delete from "+classBean;
			   Object[] pV = 	ObjectUtils.mapToHql(hql, classBean, requestMap);
			   baseDao.delByHql((String)pV[0],( Object[])pV[1]);
			   
			}

			public int update(String classBean, Map<String, Object> requestMap) {
				// TODO Auto-generated method stub
			  Object   obj = 	baseDao.findObjectById(ObjectUtils.getClazz(classBean), ObjectUtils.mapToId(classBean, requestMap));
			   ObjectUtils.mapToUpate(obj, requestMap);
				return 0;
			}

		

			
	        
	       
	      

}
