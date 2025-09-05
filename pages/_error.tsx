import { Box, Heading, Text, Button } from '@/genie-ui';

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <Box className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Box className="text-center p-8">
        <Heading as="h1" size="3xl" className="text-gray-900 mb-4">
          {statusCode ? `${statusCode} - ` : ''}Something went wrong
        </Heading>
        <Text size="lg" className="text-gray-600 mb-6">
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </Text>
        <Button 
          variant="solid" 
          size="md" 
          onClick={() => window.location.href = '/'}
        >
          Go back home
        </Button>
      </Box>
    </Box>
  );
}

Error.getInitialProps = ({ res, err }: { res?: { statusCode: number }; err?: { statusCode: number } }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

