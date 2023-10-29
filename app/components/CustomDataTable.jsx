'use client';
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({ columns, users}) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={users} columns={columns} />
    </div>
  );
}
