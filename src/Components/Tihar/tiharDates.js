import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { TiharDates, findReadableTime, addHours } from '../../utils';

const columns = [
  {
    field: 'label',
    headerName: 'Day()',
    flex: 1,
    minWidth: 170,
  },

  {
    field: 'in',
    headerName: 'In',
    width: 120,
  },
];

const TiharDays = props => {
  const startDate = TiharDates.start_date;
  const rows = TiharDates.dates.map((d, i) => {
    const day = addHours(startDate, (d.day - 1) * 24);
    return {
      id: i + 1,
      day: d.day,
      nep_label: d.nep_label,
      eng_label: d.eng_label,
      label: `${d.nep_label}(${d.eng_label})`,
      in: `${findReadableTime(day)}`,
    };
  });
  return (
    <Box
      sx={{
        height: '380px',
        width: '100%',
        '& .super-app-theme--odd': {
          backgroundColor: '#ea80808c',
          color: '#1a3e72',
          fontWeight: '600',
        },
        '& .super-app-theme--even': {
          backgroundColor: 'rgba(157, 255, 118, 0.49)',
          color: '#1a3e72',
          fontWeight: '600',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnSelector
        hideFooter
        hideFooterSelectedRowCount
        getRowClassName={params => {
          const rd = params.id % 2 === 0 ? 'even' : 'odd';
          return `super-app-theme--${rd}`;
        }}
        headerHeight={0}
      />
    </Box>
  );
};

export default TiharDays;
