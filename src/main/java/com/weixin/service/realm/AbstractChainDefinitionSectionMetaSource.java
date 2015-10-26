package com.weixin.service.realm;

import java.util.Map;

import javax.annotation.PostConstruct;

import org.apache.shiro.config.Ini;
import org.apache.shiro.config.Ini.Section;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.util.CollectionUtils;
import org.apache.shiro.web.filter.mgt.DefaultFilterChainManager;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractChainDefinitionSectionMetaSource implements ChainDefinitionSectionMetaSourceService{

	private String definitions = "";  
	  
    @Autowired  
    private ShiroFilterFactoryBean shiroFilterFactoryBean; 
    
    @PostConstruct  
    public void intiPermission() { 
        shiroFilterFactoryBean.setFilterChainDefinitionMap(obtainPermission());  
      
    }  
    
    /** 读取配置资源 */  
    private Section obtainPermission() {  
        Ini ini = new Ini();  
        ini.load(definitions); // 加载资源文件节点串  
        Section section = ini.getSection("urls"); // 使用默认节点  
        if (CollectionUtils.isEmpty(section)) {  
            section = ini.getSection(Ini.DEFAULT_SECTION_NAME); // 如不存在默认节点切割,则使用空字符转换  
        }  
        Map<String, String> permissionMap = initOtherPermission();  
        if (permissionMap != null && !permissionMap.isEmpty()) {  
            section.putAll(permissionMap);  
        }  
        return section;  
    }

	public String getDefinitions() {
		return definitions;
	}

	public void setDefinitions(String definitions) {
		this.definitions = definitions;
	}  
  
	public void updatePermission() {
		// TODO Auto-generated method stub
		 synchronized (shiroFilterFactoryBean) {  
			  
	            AbstractShiroFilter shiroFilter = null;  
	  
	            try {  
	                shiroFilter = (AbstractShiroFilter) shiroFilterFactoryBean.getObject();  
	            } catch (Exception e) {  
	                e.printStackTrace();
	            }  
	  
	            // 获取过滤管理器  
	            PathMatchingFilterChainResolver filterChainResolver = (PathMatchingFilterChainResolver) shiroFilter  
	                    .getFilterChainResolver();  
	            DefaultFilterChainManager manager = (DefaultFilterChainManager) filterChainResolver.getFilterChainManager();  
	  
	            // 清空初始权限配置  
	            manager.getFilterChains().clear();  
	            shiroFilterFactoryBean.getFilterChainDefinitionMap().clear();  
	  
	            // 重新构建生成  
	            shiroFilterFactoryBean.setFilterChainDefinitions(definitions);  
	            Map<String, String> chains = shiroFilterFactoryBean.getFilterChainDefinitionMap();  
	  
	            for (Map.Entry<String, String> entry : chains.entrySet()) {  
	                String url = entry.getKey();  
	                String chainDefinition = entry.getValue().trim().replace(" ", "");  
	                manager.createChain(url, chainDefinition);  
	            }  
	  
	            
	        }  
	}
}
