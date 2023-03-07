import { orderBy } from 'lodash';
import { Flex, TextInput, Checkbox, Button, Space, Box } from '@mantine/core';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { serviceAccountInfo } from '../../../_mocks/accounts';
import { pages } from '../../../constants/pages';

const initialRecords = serviceAccountInfo.slice(0, 100);

export function CreateService() {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'age',
    direction: 'asc',
  });
  const [records, setRecords] = useState(initialRecords);

  useEffect(() => {
    const data = orderBy(serviceAccountInfo, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);
  return (
    <>
      <h1>{pages.access.manageServiceAccounts.createService.title}</h1>
      <Space h="md" />
      <Flex mih={50} gap="md" justify="flex-start" align="flex-end" direction="row" wrap="wrap">
        <TextInput
          style={{ minWidth: 400 }}
          placeholder="Enter identifier"
          label="Identifier"
          withAsterisk
        />
      </Flex>
      <Space h="md" />
      <Checkbox disabled label="Show inactive keys" />
      <Space h="md" />
      <Box sx={{ height: 450 }}>
        <DataTable
          withBorder
          records={records}
          columns={[
            { accessor: 'age', sortable: true },
            { accessor: 'creationDate', sortable: true },
            { accessor: 'status', sortable: true },
            {
              accessor: 'publicKey',
              render: ({ publicKey }) => publicKey.map((item) => <Button style={{ margin: '0 2px' }} type="button">{item.label}</Button>,
            ) },
            {
              accessor: 'actions',
              render: ({ actions }) => actions.map((item) => <Button style={{ margin: '0 2px' }} type="button" color={item.label === 'Re-Activate' ? 'green' : 'red'}>{item.label}</Button>,
            ) },
          ]}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Box>
    </>
  );
}
