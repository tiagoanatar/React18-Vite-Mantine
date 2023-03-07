import { orderBy } from 'lodash';
import { Box, Grid, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons';
//import { IconEdit, IconTrash, IconTrashX, IconSearch } from '@tabler/icons';
import { manageUsersList } from '../../../_mocks/user';
import { pages } from '../../../constants/pages';

const initialRecords = manageUsersList.slice(0, 100);

export function EditService() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'name', direction: 'asc' });
  const [records, setRecords] = useState(initialRecords);

  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setRecords(
      initialRecords.filter(({ name, email, status }) => {
        if (
          debouncedQuery !== '' &&
          !`${name} ${email} ${status}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  useEffect(() => {
    const data = orderBy(manageUsersList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <>
      <h1>{pages.access.manageUsers.title}</h1>
      <Grid align="center" mb="md">
        <Grid.Col xs={8} sm={9}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search users..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
      </Grid>
      <Box sx={{ height: 450 }}>
        <DataTable
          withBorder
          records={records}
          columns={[
            { accessor: 'name', render: ({ name }) => `${name}`, sortable: true },
            { accessor: 'email', sortable: true },
            { accessor: 'status', sortable: true },
            { accessor: 'permission', sortable: true },
          ]}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Box>
    </>
  );
}
