package com.kyg.intro.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String name;
    private String password;
    private String role;

    public UserDTO(String name, String password, String role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
