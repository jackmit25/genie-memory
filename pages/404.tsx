import { Box, Heading, Text, Button } from '@/genie-ui';
import { Home } from 'lucide-react';

export default function Custom404() {
  return (
    <Box className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Box className="text-center p-8">
        <Heading as="h1" size="3xl" className="text-gray-900 mb-4">
          404 - Page Not Found
        </Heading>
        <Text size="lg" className="text-gray-600 mb-6">
          The page you're looking for doesn't exist.
        </Text>
        <Button 
          variant="solid" 
          size="lg" 
          onClick={() => window.location.href = '/'}
        >
          <Home className="w-5 h-5 mr-2" />
          Go back home
        </Button>
      </Box>
    </Box>
  );
}

