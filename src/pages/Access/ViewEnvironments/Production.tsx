import { orderBy } from 'lodash';
import { Alert, Space, Tabs, Box } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { pages } from '../../../constants/pages';
import { environmentUsersList } from '../../../_mocks/user';
import { environmentServiceList } from '../../../_mocks/accounts';

const devUserRecords = environmentUsersList.slice(0, 5);
const devServiceAccountRecords = environmentServiceList.slice(0, 5);

export function Production() {
  const [sortStatusUser, setSortStatusUser] = useState<DataTableSortStatus>({
    columnAccessor: 'identifier',
    direction: 'asc',
  });
  const [sortStatusService, setSortStatusService] = useState<DataTableSortStatus>({
    columnAccessor: 'identifier',
    direction: 'asc',
  });

  const [userRecords, setUserRecords] = useState(devUserRecords);
  const [serviceRecord, setServiceRecords] = useState(devServiceAccountRecords);

  useEffect(() => {
    const data = orderBy(environmentUsersList, sortStatusUser.columnAccessor);
    setUserRecords(sortStatusUser.direction === 'desc' ? data.reverse() : data);
  }, [sortStatusUser]);

  useEffect(() => {
    const data = orderBy(environmentServiceList, sortStatusService.columnAccessor);
    setServiceRecords(sortStatusService.direction === 'desc' ? data.reverse() : data);
  }, [sortStatusService]);
  return (
    <>
      <h1>{pages.access.viewEnvironments.production.title}</h1>
      <Alert icon={<IconAlertCircle size={16} />} color="white">
        Production environments details below.
      </Alert>
      <Space h="md" />
      <Tabs defaultValue="users">
        <Tabs.List>
          <Tabs.Tab value="users">Users</Tabs.Tab>
          <Tabs.Tab value="service-account">Service Accounts</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="users">
          <Box sx={{ height: 450 }}>
            <DataTable
              withBorder
              records={userRecords}
              columns={[
                { accessor: 'name', sortable: true },
                { accessor: 'email', sortable: true },
                { accessor: 'permission', sortable: true },
              ]}
              sortStatus={sortStatusUser}
              onSortStatusChange={setSortStatusUser}
            />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="service-account">
        <Box sx={{ height: 450 }}>
          <DataTable
            withBorder
            records={serviceRecord}
            columns={[
              { accessor: 'identifier', sortable: true },
              { accessor: 'permission', sortable: true },
            ]}
            sortStatus={sortStatusService}
            onSortStatusChange={setSortStatusService}
          />
        </Box>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
