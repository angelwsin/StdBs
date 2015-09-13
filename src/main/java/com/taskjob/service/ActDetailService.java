package com.taskjob.service;

import com.taskjob.bean.ActCard;
import com.taskjob.bean.ActDetail;
import com.taskjob.bean.User;

public interface ActDetailService {
         public void save(ActDetail actDetail);
         public ActDetail saveActToUser(User user,ActCard card);
         public void active(ActDetail card);
}
