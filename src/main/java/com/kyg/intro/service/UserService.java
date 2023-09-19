package com.kyg.intro.service;

import com.kyg.intro.data.dto.UserDTO;
import com.kyg.intro.data.dto.UserResponseDTO;

public interface UserService {
    UserResponseDTO getUser(Long id);

    UserResponseDTO saveUser(UserDTO userDTO);

    UserResponseDTO changeUserName(Long id, String name) throws Exception;

    void deleteUser(Long id) throws Exception;

}
