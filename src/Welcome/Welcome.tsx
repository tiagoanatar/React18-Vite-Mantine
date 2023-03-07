import { Button, Stack, Text } from '@mantine/core';
import { useState } from 'react';

export function Welcome() {
  const [count, setCount] = useState(0);
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine! {count}
      </Text>
      <Button onClick={() => setCount((prev) => prev + 1)}>Click the button</Button>
    </Stack>
  );
}
