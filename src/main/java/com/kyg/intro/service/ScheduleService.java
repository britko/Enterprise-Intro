package com.kyg.intro.service;

import com.kyg.intro.data.dto.ScheduleDTO;
import com.kyg.intro.data.entity.Schedule;

import java.util.List;

public interface ScheduleService {

    public List<Schedule> getScheduleList();

    public void saveSchedule(ScheduleDTO scheduleDTO);

    public void updateSchedule(ScheduleDTO scheduleDTO);

    public void deleteSchedule(Integer id);

}
