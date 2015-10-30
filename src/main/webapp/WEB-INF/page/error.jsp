<!DOCTYPE html><html><head><title>Apache Tomcat/8.0.24 - Error report</title><style type="text/css">H1
 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family
:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma
,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial
,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color
:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color
 : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}</style
> </head><body><h1>HTTP Status 500 - Could not write content: / by zero (through reference chain: com
.weixin.bean.Page[&quot;totalPage&quot;]); nested exception is com.fasterxml.jackson.databind.JsonMappingException
: / by zero (through reference chain: com.weixin.bean.Page[&quot;totalPage&quot;])</h1><div class="line"
></div><p><b>type</b> Exception report</p><p><b>message</b> <u>Could not write content: / by zero (through
 reference chain: com.weixin.bean.Page[&quot;totalPage&quot;]); nested exception is com.fasterxml.jackson
.databind.JsonMappingException: / by zero (through reference chain: com.weixin.bean.Page[&quot;totalPage
&quot;])</u></p><p><b>description</b> <u>The server encountered an internal error that prevented it from
 fulfilling this request.</u></p><p><b>exception</b></p><pre>org.springframework.http.converter.HttpMessageNotWritableException
: Could not write content: / by zero (through reference chain: com.weixin.bean.Page[&quot;totalPage&quot
;]); nested exception is com.fasterxml.jackson.databind.JsonMappingException: / by zero (through reference
 chain: com.weixin.bean.Page[&quot;totalPage&quot;])
	org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter.writeInternal(AbstractJackson2HttpMessageConverter
.java:238)
	org.springframework.http.converter.AbstractHttpMessageConverter.write(AbstractHttpMessageConverter.java
:208)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:161)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:101)
	org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor.handleReturnValue
(RequestResponseBodyMethodProcessor.java:167)
	org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite.handleReturnValue(HandlerMethodReturnValueHandlerComposite
.java:71)
	org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle
(ServletInvocableHandlerMethod.java:126)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandleMethod
(RequestMappingHandlerAdapter.java:776)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter
.java:705)
	org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter
.java:85)
	org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:959)
	org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:893)
	org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:966)
	org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:857)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:622)
	org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:842)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:729)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
	org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java
:85)
	org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)
	org.apache.shiro.web.servlet.AbstractShiroFilter$1.call(AbstractShiroFilter.java:365)
	org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)
	org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)
	org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)
	org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)
	org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)
	org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:344)

	org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:261)
</pre><p><b>root cause</b></p><pre>com.fasterxml.jackson.databind.JsonMappingException: / by zero (through
 reference chain: com.weixin.bean.Page[&quot;totalPage&quot;])
	com.fasterxml.jackson.databind.JsonMappingException.wrapWithPath(JsonMappingException.java:232)
	com.fasterxml.jackson.databind.JsonMappingException.wrapWithPath(JsonMappingException.java:197)
	com.fasterxml.jackson.databind.ser.std.StdSerializer.wrapAndThrow(StdSerializer.java:184)
	com.fasterxml.jackson.databind.ser.std.BeanSerializerBase.serializeFields(BeanSerializerBase.java:605
)
	com.fasterxml.jackson.databind.ser.BeanSerializer.serialize(BeanSerializer.java:142)
	com.fasterxml.jackson.databind.ser.DefaultSerializerProvider.serializeValue(DefaultSerializerProvider
.java:118)
	com.fasterxml.jackson.databind.ObjectMapper.writeValue(ObjectMapper.java:1819)
	org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter.writeInternal(AbstractJackson2HttpMessageConverter
.java:231)
	org.springframework.http.converter.AbstractHttpMessageConverter.write(AbstractHttpMessageConverter.java
:208)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:161)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:101)
	org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor.handleReturnValue
(RequestResponseBodyMethodProcessor.java:167)
	org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite.handleReturnValue(HandlerMethodReturnValueHandlerComposite
.java:71)
	org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle
(ServletInvocableHandlerMethod.java:126)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandleMethod
(RequestMappingHandlerAdapter.java:776)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter
.java:705)
	org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter
.java:85)
	org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:959)
	org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:893)
	org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:966)
	org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:857)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:622)
	org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:842)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:729)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
	org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java
:85)
	org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)
	org.apache.shiro.web.servlet.AbstractShiroFilter$1.call(AbstractShiroFilter.java:365)
	org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)
	org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)
	org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)
	org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)
	org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)
	org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:344)

	org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:261)
</pre><p><b>root cause</b></p><pre>java.lang.ArithmeticException: / by zero
	com.weixin.bean.Page.getTotalPage(Page.java:19)
	sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)
	sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)
	java.lang.reflect.Method.invoke(Unknown Source)
	com.fasterxml.jackson.databind.ser.BeanPropertyWriter.get(BeanPropertyWriter.java:679)
	com.fasterxml.jackson.databind.ser.BeanPropertyWriter.serializeAsField(BeanPropertyWriter.java:534)

	com.fasterxml.jackson.databind.ser.std.BeanSerializerBase.serializeFields(BeanSerializerBase.java:597
)
	com.fasterxml.jackson.databind.ser.BeanSerializer.serialize(BeanSerializer.java:142)
	com.fasterxml.jackson.databind.ser.DefaultSerializerProvider.serializeValue(DefaultSerializerProvider
.java:118)
	com.fasterxml.jackson.databind.ObjectMapper.writeValue(ObjectMapper.java:1819)
	org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter.writeInternal(AbstractJackson2HttpMessageConverter
.java:231)
	org.springframework.http.converter.AbstractHttpMessageConverter.write(AbstractHttpMessageConverter.java
:208)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:161)
	org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodProcessor.writeWithMessageConverters
(AbstractMessageConverterMethodProcessor.java:101)
	org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor.handleReturnValue
(RequestResponseBodyMethodProcessor.java:167)
	org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite.handleReturnValue(HandlerMethodReturnValueHandlerComposite
.java:71)
	org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle
(ServletInvocableHandlerMethod.java:126)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandleMethod
(RequestMappingHandlerAdapter.java:776)
	org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter
.java:705)
	org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter
.java:85)
	org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:959)
	org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:893)
	org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:966)
	org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:857)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:622)
	org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:842)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:729)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
	org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java
:85)
	org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)
	org.apache.shiro.web.servlet.AbstractShiroFilter$1.call(AbstractShiroFilter.java:365)
	org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)
	org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)
	org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)
	org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)
	org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)
	org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:344)

	org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:261)
</pre><p><b>note</b> <u>The full stack trace of the root cause is available in the Apache Tomcat/8.0
.24 logs.</u></p><hr class="line"><h3>Apache Tomcat/8.0.24</h3></body></html>