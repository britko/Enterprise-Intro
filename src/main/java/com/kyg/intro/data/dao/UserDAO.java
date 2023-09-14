package com.kyg.intro.data.dao;

import com.kyg.intro.data.entity.User;

public interface UserDAO {
    User insertUser(User user);

    User selectUser(Long id);

    User updateUserName(Long id, String name) throws Exception;

    void deleteUser(Long id) throws Exception;
}
