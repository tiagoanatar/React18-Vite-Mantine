import { Alert, Space, Card, Text, Button, Grid, Center } from '@mantine/core';
import { IconAlertCircle, IconCode, IconCodeDots, IconCodeCircle } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { pages } from '../../../constants/pages';

export function ViewEnvironments() {
  return (
    <>
      <h1>{pages.access.viewEnvironments.title}</h1>
      <Alert icon={<IconAlertCircle size={16} />} color="white">
        Click in a environment to open details.
      </Alert>
      <Space h="md" />
      <Grid>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconCode size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.viewEnvironments.development.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.viewEnvironments.development.title}
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconCodeDots size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.viewEnvironments.staging.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.viewEnvironments.staging.title}
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col lg={4} sm={12}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Center>
                <IconCodeCircle size={190} color="gray" stroke={1.5} />
              </Center>
            </Card.Section>

            <Text size="sm" color="dimmed">
              Ut bibendum mauris vel dui maximus sagittis quis quis est. Praesent tincidunt nisi ut
              tellus aliquet eleifend. Cras consectetur porta libero, nec condimentum dui euismod
              eu.
            </Text>

            <Button
              component={Link}
              to={pages.access.viewEnvironments.production.route}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              {pages.access.viewEnvironments.production.title}
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}
