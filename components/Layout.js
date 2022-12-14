import { Box, Flex } from '@chakra-ui/react';
import Topbar from './Topbar';

function Layout({ children }) {
  const bgColor = '#F6F6F8';

  return (
    <Box bgColor={bgColor} minH="100vh">
      <Topbar />
      <Flex flexDirection="column" pt={'62px'}>
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
