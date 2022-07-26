import React from 'react';
import OrganizationChart from '@dabeng/react-orgchart';
import MyNode from './my-node';

const Chart = () => {
  const ds = {
    id: 'n1',
    name: 'Front End Developer',
    title: 'step-by-step road map',
    children: [
      {
        id: 'n2',
        name: 'FUNDAMENTAL SKILLS',
        title: '',
        children: [
          { id: 'n3', name: 'Tie Hua', title: 'senior engineer' },
          {
            id: 'n4',
            name: 'Hei Hei',
            title: 'senior engineer',
            children: [
              { id: 'n5', name: 'Dan Dan', title: 'engineer' },
              { id: 'n6', name: 'Xiang Xiang', title: 'engineer' },
            ],
          },
          { id: 'n7', name: 'Pang Pang', title: 'senior engineer' },
        ],
      },
      { id: 'n8', name: 'Hong Miao', title: 'department manager' },
      {
        id: 'n9',
        name: 'Chun Miao',
        title: 'department manager',
        children: [{ id: 'n11', name: 'Yue Yue', title: 'senior engineer' }],
      },
    ],
  };

  return (
    <OrganizationChart
      datasource={ds}
      chartClass='myChart'
      NodeTemplate={MyNode}
    />
  );
};

export default Chart;
