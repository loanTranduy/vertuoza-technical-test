'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';
import { AgGridReact } from 'ag-grid-react';
import { useTableEntities } from '@/components/TableEntities/TableEntities.hook';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './TableEntities.scss';
import { Loader2 } from 'lucide-react';

const TableEntities = () => {
  const { loading, error, data } = useQuery(GET_ENTITIES);
  const { columnDefs, defaultColDef } = useTableEntities();
  const entities = data?.getEntities || [];

  if (loading)
    return (
      <div className="flex items-center justify-center mb-8">
        <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  const rowHeight = 60;
  const paginationPageSize = 15;
  const hasPagination = entities.length > paginationPageSize;
  return (
    <>
      {entities.length > 0 && (
        <div className="ag-theme-alpine grid-container">
          <AgGridReact
            rowHeight={rowHeight}
            className="ag-grid"
            columnDefs={columnDefs}
            rowData={entities}
            defaultColDef={defaultColDef}
            pagination={hasPagination}
            paginationPageSize={paginationPageSize}
          />
        </div>
      )}
    </>
  );
};

export default TableEntities;
