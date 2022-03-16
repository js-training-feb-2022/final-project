import React from 'react';
import './customBarChartStyle.scss';

export function CustomBarChart({ list }) {
  return (
    <div className='chart'>
      {list.map((item) => (
        <div key={item.name} className={`bar`}>
          <div className='bar__name'>{item.name}</div>
          <div className={`bar-` + item.stat}></div>
        </div>
      ))}
    </div>
  );
}
