import React from 'react';
import { ScheduleComponent,  Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 p-2 mt-24 md:p-10 rounded-3xl bg-white'>
      <Header 
        category='App'
        title='Calendar'
      />
      <ScheduleComponent
      height='650px'
      eventSettings={{
        dataSource: scheduleData
      }}
      selectedDate={new Date(2021, 0, 10)}
      >
        <Inject  services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar