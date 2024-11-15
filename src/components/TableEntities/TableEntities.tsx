'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';
import { AgGridReact } from 'ag-grid-react';
import { useTableEntities } from '@/components/TableEntities/TableEntities.hook';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './TableEntities.scss';

const TableEntities = () => {
  const { loading, error, data } = useQuery(GET_ENTITIES);
  const { columnDefs, defaultColDef, onGridReady } = useTableEntities();
  const entities = data?.getEntities || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const rowHeight = 60;
  const paginationPageSize = 20;
  const hasPagination = entities.length > paginationPageSize;
  return (
    <div className="ag-theme-alpine grid-container">
      <AgGridReact
        onGridReady={onGridReady}
        rowHeight={rowHeight}
        className="ag-grid"
        columnDefs={columnDefs}
        rowData={entities}
        defaultColDef={defaultColDef}
        pagination={hasPagination}
        paginationPageSize={paginationPageSize}
      />
    </div>
  );
};

export default TableEntities;
