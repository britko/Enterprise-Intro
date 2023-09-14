package com.kyg.intro.data.repository;

import com.kyg.intro.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
