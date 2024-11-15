import React from 'react';
import * as agGrid from 'ag-grid-community';
import { GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { Building, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { EntityType } from '@/components/CreateEntity/CreateEntity.types';

export const useTableEntities = () => {
  const ActionUpdateEntity = () => {
    return (
      <Button variant="outline" size="icon" ariaLabel={'update entity'}>
        <Pencil />
      </Button>
    );
  };

  const EmailFiltered = ({ data }: ICellRendererParams) => {
    return <>{data.email || data.contactEmail || ''}</>;
  };

  const NameWithType = ({ data }: ICellRendererParams) => {
    const isContact = data.__typename === EntityType.CONTACT;
    return (
      <div className="flex justify-end">
        <div
          className={`inline-flex items-center justify-center rounded-md h-10 w-10 border-2 ${isContact ? 'border-blue-500' : 'border-teal-500'}`}
        >
          {isContact ? (
            <User className="h-4 w-4 text-blue-500" />
          ) : (
            <Building className="h-4 w-4 text-teal-500" />
          )}
        </div>
      </div>
    );
  };

  const fixedColWidth = 80;

  const columnDefs: agGrid.ColDef[] = [
    {
      field: '',
      cellRenderer: NameWithType,
      resizable: false,
      flex: 0,
      width: fixedColWidth,
      minWidth: fixedColWidth,
    },
    { field: 'name', headerName: 'Name', sort: 'asc' },
    { field: 'industry' },
    { field: 'email', cellRenderer: EmailFiltered },
    { field: 'phone' },
    {
      headerName: '',
      resizable: false,
      width: fixedColWidth,
      minWidth: fixedColWidth,
      flex: 0,
      cellRenderer: ActionUpdateEntity,
    },
  ];

  const defaultColDef: agGrid.ColDef = {
    flex: 1,
    resizable: true,
    minWidth: 100,
  };

  const onGridReady = (params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  };

  return {
    columnDefs,
    defaultColDef,
    onGridReady,
  };
};
