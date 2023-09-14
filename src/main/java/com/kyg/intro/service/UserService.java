package com.kyg.intro.service;

import com.kyg.intro.data.dto.UserDTO;
import com.kyg.intro.data.dto.UserResponseDTO;

public interface UserService {
    UserResponseDTO getUser(Long userId);

    UserResponseDTO saveUser(UserDTO userDTO);

    UserResponseDTO changeUserName(Long userId, String userName) throws Exception;

    void deleteUser(Long userId) throws Exception;

}
