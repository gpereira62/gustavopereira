import { Box, Flex } from '@chakra-ui/react';

export default function Topbar() {
  const bgColor = '#FFF';
  const color = '#1A202C';
  const borderColor = '#DDD';

  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={99999}
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        maxW={1200}
        margin="0 auto"
        h="60px"
        pt={4}
        paddingBottom={4}
        px={[4, 8]}
      >
        <Box>gustavopereira.io</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  );
}
