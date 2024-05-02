import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div className='m-4 md:m-10 p-10 mt-24 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category="Chart" title="Inflation Rate" />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line