package com.example.cm.data.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {
    private Long id;
    private String name;
    private String password;
    private String role;

    public UserResponseDTO() {}

    public UserResponseDTO(Long id, String name, String password, String role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
