package com.kyg.intro.controller;

import com.kyg.intro.data.dto.UserDTO;
import com.kyg.intro.data.dto.UserResponseDTO;
import com.kyg.intro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String userFrom() {
        return "UserFrom";
    }
    @PostMapping("/signup")
    public UserResponseDTO signup(UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }
    @PostMapping("/login")
    public UserResponseDTO login(UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }

//    @GetMapping("/signup")
//    public String signupFrom() {
//        return "signup";
//    }

//    @PostMapping("/signup")
//    public UserResponseDTO signup(UserDTO userDTO) {
//        return userService.saveUser(userDTO);
//    }

//    @PostMapping("/signup")
//    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserDTO userDTO) {
//        UserResponseDTO userResponseDTO = userService.saveUser(userDTO);
//
//        return ResponseEntity.status(HttpStatus.OK).body(userResponseDTO);
//    }
}
