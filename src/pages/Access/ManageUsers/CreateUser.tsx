import { useState } from 'react';
import { Grid, Box, TextInput, Radio, Checkbox, Button, Alert, Space } from '@mantine/core';
import { IconAlertCircle, IconCircle } from '@tabler/icons';
import { pages } from '../../../constants/pages';

type UserState = 'NEW' | 'INVITED' | 'ACCEPTED';

export function CreateUser() {
  const [userState, setUserState] = useState<UserState>('NEW');
  return (
    <>
      <h1>{pages.access.manageUsers.createUser.title}</h1>
      <Alert icon={<IconAlertCircle size={16} />} color="white">
        Enter email of the user you would like to invite. Once you invite the user you will be able
        to change their permissions.
      </Alert>
      <Space h="md" />
      <Grid mb="md">
        <Grid.Col xs={9} sm={9}>
          {userState === 'NEW' ? null : (
            <>
              <TextInput label="Name" sx={{ flexBasis: '60%' }} placeholder="Add user name" />
              <Space h="md" />
            </>
          )}
          <TextInput label="Email" sx={{ flexBasis: '60%' }} placeholder="Add user email" />
          <Space h="md" />
          {userState === 'NEW' ? null : (
            <>
              <TextInput
                icon={
                  userState === 'INVITED' ? (
                    <IconCircle size={16} color="red" />
                  ) : (
                    <IconCircle size={16} color="blue" />
                  )
                }
                value={userState}
                label="Status"
                sx={{ flexBasis: '60%' }}
                placeholder="Add user status"
              />
              <Space h="md" />
            </>
          )}
          {userState === 'ACCEPTED' ? (
            <Button color="blue" onClick={() => setUserState('ACCEPTED')}>
              Send Reset Password Email
            </Button>
          ) : (
            <Button color="blue" onClick={() => setUserState('INVITED')}>
              {userState === 'NEW' ? 'Send Invite' : 'Re-send Invite'}
            </Button>
          )}
          {userState === 'NEW' ? null : (
            <>
              <Space h="md" />
              <Button color="red">Remove User From Company</Button>
            </>
          )}
        </Grid.Col>
        <Grid.Col xs={3} sm={3} style={{ textAlign: 'right' }}>
          {userState === 'NEW' ? null : (
            <>
              <Button color="blue">Save</Button> <Button color="gray">Cancel</Button>
            </>
          )}
        </Grid.Col>
      </Grid>
      <Space h="md" />
      {userState === 'NEW' ? null : (
        <>
          <h2>Permission</h2>
          <Radio.Group defaultValue="PARTIAL">
            <Radio
              value="FULL"
              label="User has full permissions to all environments and everything inside IAM"
              style={{ width: '100%' }}
            />
            <Radio
              value="PARTIAL"
              label="User only have full permission to specific environments"
              style={{ width: '100%' }}
            />
            <Box style={{ padding: '20px', backgroundColor: 'black' }}>
              <Checkbox value="Development" label="Development" style={{ marginBottom: '10px' }} />
              <Checkbox value="Staging" label="Staging" style={{ marginBottom: '10px' }} />
              <Checkbox value="Production" label="Production" />
            </Box>
            <Radio
              value="NONE"
              label="User does not have access to anything"
              style={{ width: '100%' }}
            />
          </Radio.Group>
        </>
      )}
    </>
  );
}
