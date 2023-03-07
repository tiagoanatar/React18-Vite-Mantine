import { Grid, TextInput, Space, Button, Radio, Checkbox, Box } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { manageUsersList } from '../../../_mocks/user';
import { pages } from '../../../constants/pages';

export function EditUser() {
  const params = useParams();
  const initialRecords = manageUsersList.find((item) => String(item.id) === params.id);
  const [data, setData] = useState(initialRecords);

  useEffect(() => setData(initialRecords), [initialRecords]);

  return (
    <>
      <h1>
        {pages.access.manageUsers.editUser.title}: {data?.name}
      </h1>
      <Grid mb="md">
        <Grid.Col xs={9} sm={9}>
          <TextInput
            label="Name"
            value={data?.name}
            sx={{ flexBasis: '60%' }}
            placeholder="Search users..."
          />
          <Space h="md" />
          <TextInput
            label="Email"
            value={data?.email}
            sx={{ flexBasis: '60%' }}
            placeholder="Search users..."
          />
          <Space h="md" />
          <TextInput
            label="Status"
            value={data?.status}
            sx={{ flexBasis: '60%' }}
            placeholder="Search users..."
          />
          <Space h="md" />
          <Button color="blue">Send Reset Password Email</Button>
          <Space h="md" />
          <Button color="red">Remove User From Company</Button>
        </Grid.Col>
        <Grid.Col xs={3} sm={3} style={{ textAlign: 'right' }}>
          <Button color="blue">Save</Button> <Button color="gray">Cancel</Button>
        </Grid.Col>
      </Grid>
      <Space h="md" />
      <h2>Permission</h2>
      <Radio.Group defaultValue="PARTIAL">
        <Radio
          value="FULL"
          label="User has full permissions to all environments and everything inside IAM"
          style={{ width: '100%' }}
        />
        <Radio value="PARTIAL" label="User only have full permission to specific environments" style={{ width: '100%' }} />
          <Box style={{ padding: '20px', backgroundColor: 'black' }}>
            <Checkbox value="Development" label="Development" style={{ marginBottom: '10px' }} />
            <Checkbox value="Staging" label="Staging" style={{ marginBottom: '10px' }} />
            <Checkbox value="Production" label="Production" />
          </Box>
        <Radio value="NONE" label="User does not have access to anything" style={{ width: '100%' }} />
      </Radio.Group>
    </>
  );
}
