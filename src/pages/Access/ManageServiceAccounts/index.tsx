import { orderBy } from 'lodash';
import { Box, Grid, TextInput, Alert, Space } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { IconSearch, IconAlertCircle } from '@tabler/icons';
import { manageAccountList } from '../../../_mocks/accounts';
import { pages } from '../../../constants/pages';

const initialRecords = manageAccountList.slice(0, 100);

export function ManageServiceAccounts() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'identifier', direction: 'asc' });
  const [records, setRecords] = useState(initialRecords);

  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setRecords(
      initialRecords.filter(({ identifier, activeKeys, roles, oldestActiveKeyAge }) => {
        if (
          debouncedQuery !== '' &&
          !`${identifier} ${activeKeys} ${roles} ${oldestActiveKeyAge}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  useEffect(() => {
    const data = orderBy(manageAccountList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <>
      <h1>{pages.access.manageServiceAccounts.title}</h1>
      <Alert icon={<IconAlertCircle size={16} />} color="white">
        You can filter the searches in each column header, or use the general filter here.
      </Alert>
      <Space h="md" />
      <Grid align="center" mb="md">
        <Grid.Col xs={8} sm={8}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search accounts..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col xs={4} sm={4}>
        <Alert icon={<IconAlertCircle size={16} />} color="white">
          Click on a roll to open details.
        </Alert>
        </Grid.Col>
      </Grid>
      <Box sx={{ height: 450 }}>
        <DataTable
          withBorder
          records={records}
          columns={[
            { accessor: 'identifier', render: ({ identifier }) => `${identifier}`, sortable: true },
            { accessor: 'activeKeys', sortable: true },
            { accessor: 'roles', sortable: true },
            { accessor: 'oldestActiveKeyAge', sortable: true },
          ]}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Box>
    </>
  );
}
