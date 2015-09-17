package com.weixn.service;

import com.weixin.bean.ActCard;
import com.weixin.bean.ActDetail;
import com.weixin.bean.User;

public interface ActDetailService {
         public void save(ActDetail actDetail);
         public ActDetail saveActToUser(User user,ActCard card);
         public void active(ActDetail card);
}
