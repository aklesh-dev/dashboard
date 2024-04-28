import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Edit, Selection, Toolbar, Sort, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        title="Cumtomer"
        category="Page"
      />
      <GridComponent      
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{
        allowDeleting: true,
        allowEditing: true
      }}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />
          })}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit, Filter, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Customer