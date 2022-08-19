import { Box, Heading } from '@chakra-ui/react';
import useAuth from 'src/hooks/useAuth';

export default function Home() {
  const { user, signin } = useAuth();
  console.log('user', user);
  return (
    <Box>
      <Box bg="gray.100" w="100%" p={4}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Aprenda programação direto ao ponto 100% FREE
        </Heading>
      </Box>
      {/* <h2>Aprenda programação direto ao ponto 100% free</h2>

      <button onClick={() => signin()}>Entrar com github</button> */}
    </Box>
  );
}
