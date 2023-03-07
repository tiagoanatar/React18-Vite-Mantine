import { Card, Text, Button, Grid, Center } from '@mantine/core';
import { IconUserCircle, IconLogin, IconGitPullRequest } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { pages } from '../../constants/pages';

export default function Access() {
  return (
    <>
      <h1>{pages.access.title}</h1>

      <Grid>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconUserCircle size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.manageUsers.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.manageUsers.title}
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconLogin size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.manageServiceAccounts.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.manageServiceAccounts.title}
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconGitPullRequest size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.viewEnvironments.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.viewEnvironments.title}
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}
