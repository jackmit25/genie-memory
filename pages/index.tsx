import { 
  Home as HomeIcon, 
  FileText, 
  Upload, 
  Search, 
  Plus, 
  ChevronRight, 
  Star, 
  Settings,
  ArrowRight,
  Grid3X3,
  List,
  Calendar,
  FolderOpen,
  Pencil,
  FileUp,
  Search as SearchIcon
} from 'lucide-react';
import { 
  Box, 
  Flex, 
  VStack, 
  HStack,
  Container, 
  Button, 
  Heading, 
  Text,
  Avatar,
  Link,
  Divider,
  CollapsiblePanel,
} from '@/genie-ui';

export default function Home() {
  return (
    <Box className="min-h-screen bg-white">
      <Flex className="min-h-screen">
        {/* Left Sidebar */}
        <Box className="w-44 lg:w-48 xl:w-52 bg-white border-r border-gray-200 p-3 flex flex-col h-screen sticky top-0">
          {/* Logo */}
          <Box className="mb-4">
            <Heading as="h1" size="lg" className="text-purple-600 font-bold">
              GENIE AI
            </Heading>
          </Box>

          {/* Home Link */}
          <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 mb-3">
            <HomeIcon className="w-4 h-4" />
            <Text size="sm">Home</Text>
          </Link>

          {/* Start with Section */}
          <Box className="mb-4">
            <Text size="xs" className="text-gray-500 font-medium mb-2">Start with</Text>
            <VStack spacing={1}>
              <Link href="#" className="flex items-center justify-between w-full p-1.5 rounded-lg hover:bg-gray-50">
                <Flex align="center" className="space-x-2">
                  <FileText className="w-4 h-4 text-purple-600" />
                  <Text size="sm">Create document</Text>
                </Flex>
                <Box className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                  AI
                </Box>
              </Link>
              <Link href="#" className="flex items-center justify-between w-full p-1.5 rounded-lg hover:bg-gray-50">
                <Flex align="center" className="space-x-2">
                  <Upload className="w-4 h-4 text-purple-600" />
                  <Text size="sm">Import document</Text>
                </Flex>
                <Box className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                  AI
                </Box>
              </Link>
              <Link href="#" className="flex items-center justify-between w-full p-1.5 rounded-lg hover:bg-gray-50">
                <Flex align="center" className="space-x-2">
                  <Search className="w-4 h-4 text-purple-600" />
                  <Text size="sm">Template library</Text>
                </Flex>
              </Link>
            </VStack>
          </Box>

          {/* Active Projects */}
          <Box className="mb-3">
            <Flex align="center" justify="between" className="mb-2">
              <Text size="xs" className="text-gray-500 font-medium">Active Projects</Text>
              <Button variant="light" size="sm" className="p-0.5">
                <Plus className="w-3 h-3" />
              </Button>
            </Flex>
            <VStack spacing={0.5}>
              {[
                { name: "msa project", color: "blue" },
                { name: "Mutual NDA project", color: "green" },
                { name: "nda project", color: "purple" },
                { name: "EMI Options Agreeme...", color: "orange" },
                { name: "nda project", color: "pink" },
                { name: "Opportunities & Probl...", color: "olive" },
                { name: "Create an NDA project", color: "red" },
                { name: "New Project", color: "zinc" }
              ].map((project, index) => (
                <Flex key={index} align="center" className="w-full p-1 rounded-lg hover:bg-gray-50">
                  <Box 
                    className={`w-1.5 h-1.5 rounded-full mr-2`}
                    style={{ backgroundColor: `var(--colours-common-${project.color}-500)` }}
                  />
                  <Text size="sm" className="text-gray-700 truncate">{project.name}</Text>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Archived Projects */}
          <Box className="mb-3">
            <Link href="#" className="flex items-center justify-between w-full p-1.5 rounded-lg hover:bg-gray-50">
              <Text size="xs" className="text-gray-500 font-medium">Archived Projects</Text>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </Link>
          </Box>

          {/* Docs Left */}
          <Box className="mt-auto mb-3">
            <Flex align="center" className="p-1.5 bg-purple-50 rounded-lg">
              <Star className="w-3 h-3 text-purple-600 mr-2" />
              <Text size="xs" className="text-purple-700">931 docs left for this month</Text>
            </Flex>
          </Box>

          {/* Settings */}
          <Link href="/settings/organisation-profile" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 mb-3">
            <Settings className="w-4 h-4" />
            <Text size="sm">Settings and preferences</Text>
          </Link>
        </Box>

        {/* Main Content Area */}
        <Box className="flex-1 p-8 bg-gray-50 overflow-y-auto h-screen">
          {/* Hero Section */}
          <Box className="mb-12">
            <Heading as="h1" size="3xl" className="text-gray-900 font-bold mb-8">
              Speed up your work with the world's most advanced legal AI
            </Heading>
          </Box>

          {/* Feature Cards */}
          <Box className="mb-12">
            <Flex className="space-x-6">
              {/* Create from scratch with AI */}
              <Box className="flex-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                <Box className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Star className="w-full h-full text-purple-400" />
                </Box>
                <VStack align="start" spacing={3}>
                  <Box className="p-3 bg-purple-100 rounded-lg">
                    <Pencil className="w-8 h-8 text-purple-600" />
                  </Box>
                  <Heading as="h3" size="lg" className="text-gray-900">
                    Create from scratch with AI
                  </Heading>
                  <VStack align="start" spacing={1}>
                    <Text size="md" className="text-gray-600">✓ Create a bespoke agreement based on your needs</Text>
                    <Text size="md" className="text-gray-600">✓ Draft for any jurisdiction</Text>
                    <Text size="md" className="text-gray-600">✓ Get a complete document in 5-10 minutes</Text>
                  </VStack>
                  <Button variant="light" size="lg" className="p-2 mt-auto">
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </VStack>
              </Box>

              {/* Import document & use AI */}
              <Box className="flex-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                <Box className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Star className="w-full h-full text-purple-400" />
                </Box>
                <VStack align="start" spacing={3}>
                  <Box className="p-3 bg-purple-100 rounded-lg">
                    <FileUp className="w-8 h-8 text-purple-600" />
                  </Box>
                  <Heading as="h3" size="lg" className="text-gray-900">
                    Import document & use AI
                  </Heading>
                  <VStack align="start" spacing={1}>
                    <Text size="md" className="text-gray-600">✓ Ask any question about your document</Text>
                    <Text size="md" className="text-gray-600">✓ Get AI to review your document</Text>
                    <Text size="md" className="text-gray-600">✓ Amend any clause with AI</Text>
                    <Text size="md" className="text-gray-600">✓ Ask AI to explain any clause</Text>
                  </VStack>
                  <Button variant="light" size="lg" className="p-2 mt-auto">
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </VStack>
              </Box>

              {/* Search the template library */}
              <Box className="flex-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                <Box className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Star className="w-full h-full text-purple-400" />
                </Box>
                <VStack align="start" spacing={3}>
                  <Box className="p-3 bg-purple-100 rounded-lg">
                    <SearchIcon className="w-8 h-8 text-purple-600" />
                  </Box>
                  <Heading as="h3" size="lg" className="text-gray-900">
                    Search the template library
                  </Heading>
                  <VStack align="start" spacing={1}>
                    <Text size="md" className="text-gray-600">✓ Search Genie's 500+ high-quality legal templates</Text>
                    <Text size="md" className="text-gray-600">✓ Create your own private template library</Text>
                  </VStack>
                  <Button variant="light" size="lg" className="p-2 mt-auto">
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </VStack>
              </Box>
            </Flex>
          </Box>

          {/* Recent Documents */}
          <Box>
            <Flex align="center" justify="between" className="mb-6">
              <Heading as="h2" size="xl" className="text-gray-900">
                Recent Documents
              </Heading>
              <Flex className="space-x-2">
                <Button variant="light" size="sm" className="p-2">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="light" size="sm" className="p-2">
                  <List className="w-4 h-4" />
                </Button>
              </Flex>
            </Flex>

            {/* Document Cards */}
            <VStack spacing={6}>
              {/* First Row - 4 documents */}
              <Flex className="space-x-4 w-full">
                {[
                  { title: "msa (22 August 2025) v1", project: "msa project", date: "22 Aug 2025" },
                  { title: "Mutual NDA (21 August 2025)", project: "Mutual NDA project", date: "21 Aug 2025" },
                  { title: "nda (19 August 2025) v1", project: "nda project", date: "19 Aug 2025" },
                  { title: "EMI Options Agreement - #1", project: "EMI Options Agreement - #106-", date: "15 Aug 2025" }
                ].map((doc, index) => (
                  <Box key={index} className="flex-1 min-w-0 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <VStack align="start" spacing={3}>
                      <Box className="p-2 bg-purple-100 rounded-lg">
                        <FolderOpen className="w-6 h-6 text-purple-600" />
                      </Box>
                      <VStack align="start" spacing={1} className="w-full">
                        <Text size="md" className="text-gray-900 font-medium truncate w-full">
                          {doc.title}
                        </Text>
                        <Text size="sm" className="text-gray-600 truncate w-full">{doc.project}</Text>
                        <Flex align="center" className="space-x-2 w-full">
                          <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <Text size="sm" className="text-gray-500 truncate">Last edited: {doc.date}</Text>
                        </Flex>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </Flex>

              {/* Second Row - 1 document */}
              <Flex className="space-x-4 w-full">
                <Box className="flex-1 min-w-0 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <VStack align="start" spacing={3}>
                    <Box className="p-2 bg-purple-100 rounded-lg">
                      <FolderOpen className="w-6 h-6 text-purple-600" />
                    </Box>
                    <VStack align="start" spacing={1} className="w-full">
                      <Text size="md" className="text-gray-900 font-medium truncate w-full">
                        EMI Options Agreement - #1
                      </Text>
                      <Text size="sm" className="text-gray-600 truncate w-full">EMI Options Agreement - #106-</Text>
                      <Flex align="center" className="space-x-2 w-full">
                        <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <Text size="sm" className="text-gray-500 truncate">Last edited: 15 Aug 2025</Text>
                      </Flex>
                    </VStack>
                  </VStack>
                </Box>
                {/* Empty spaces to maintain grid alignment */}
                <Box className="flex-1" />
                <Box className="flex-1" />
                <Box className="flex-1" />
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
