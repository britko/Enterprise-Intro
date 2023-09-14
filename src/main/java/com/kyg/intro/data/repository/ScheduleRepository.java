package com.kyg.intro.data.repository;

import com.kyg.intro.data.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer>{
}
