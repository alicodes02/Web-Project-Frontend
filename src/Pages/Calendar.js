import React from 'react';
import { Calendar } from 'react-big-calendar';
import moment from 'moment';

const TasksList = [
  {
    id: 1,
    title: 'Testing of Calendar Component',
    start_at: '2019-11-19T05:30:00',
    end_at: '2019-11-20T05:30:00',
    is_sandwich: false,
    color: 'fff600',
  },
];

const getTasksList = () => {
  const Tasks = [];
  for (let i = 0; i < TasksList.length; i++) {
    let start_at = new Date(TasksList[i].start_at);
    let end_at = new Date(TasksList[i].end_at);
    Tasks.push({ ...TasksList[i], start_at: start_at, end_at: end_at });
  }
  return Tasks;
};

const CreateEvent = () => {
  const Tasks = getTasksList().map((task) => ({
    id: task.id,
    title: task.title,
    start: new Date(task.start_at),
    end: new Date(task.end_at),
    color: task.color,
    type: 'Urgent',
    allDay: true,
  }));
  return [...Tasks];
};

const MyCalendar = () => {
  const list = CreateEvent();

  const eventPropGetter = (event) => {
    const eventData = list.find((ot) => ot.id === event.id);
    const backgroundColor = eventData && eventData.color;
    return { style: { backgroundColor } };
  };

  return (
    <Calendar
      events={list}
      startAccessor="start"
      endAccessor="end"
      defaultDate={moment().toDate()}
      eventPropGetter={eventPropGetter}
    />
  );
};

export default MyCalendar;
