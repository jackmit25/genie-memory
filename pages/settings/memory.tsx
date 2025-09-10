import React, { useState } from 'react';
import {
  Home,
  FileText,
  Upload,
  Search,
  Plus,
  ChevronRight,
  Star,
  Settings as SettingsIcon,
  Building2,
  LogOut,
  Users,
  CreditCard,
  Gift,
  Brain,
  Share2,
  ChevronDown,
  Trash2,
  ArrowUpDown,
  File,
  BookOpen,
  Layout,
  Settings,
  Search as SearchIcon,
  Pencil
} from 'lucide-react';
import {
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/genie-ui';

export default function Memory() {
  const [activeTab, setActiveTab] = useState('organisational');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <Box className="min-h-screen bg-white">
      <Flex className="min-h-screen">
        {/* Left Sidebar (Same as home page) */}
        <Box className="w-44 lg:w-48 xl:w-52 bg-white border-r border-gray-200 p-3 flex flex-col h-screen sticky top-0">
          {/* Logo */}
          <Box className="mb-4">
            <Heading as="h1" size="lg" className="text-purple-600 font-bold">
              GENIE AI
            </Heading>
          </Box>

          {/* Home Link */}
          <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 mb-3">
            <Home className="w-4 h-4" />
            <Text size="sm">Home</Text>
          </Link>

          {/* Memory Link */}
          <Link href="/settings/memory" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 mb-3">
            <Brain className="w-4 h-4" />
            <Text size="sm">Memory</Text>
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
            <VStack spacing={1}>
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
            <SettingsIcon className="w-4 h-4" />
            <Text size="sm">Settings and preferences</Text>
          </Link>
        </Box>


        {/* Main Content Area */}
        <Box className="flex-1 p-8 bg-gray-50 overflow-y-auto h-screen">
          {/* Page Header */}
          <Box className="mb-8">
            <Flex className="justify-between items-start">
              <Box>
                <Heading as="h1" size="3xl" className="text-gray-900 font-bold">
                  Memory
                </Heading>
                <Text size="lg" className="text-gray-600 mt-2">
                  Your AI memory system stores and learns from your interactions, documents, and preferences to provide more personalized assistance.
                </Text>
              </Box>

            </Flex>
          </Box>

          {/* Memory Content */}
          <VStack spacing={6} className="w-full">
            {/* Tabs */}
            <Box className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
              <Flex className="space-x-1 mb-6">
                <Button
                  variant="light"
                  onClick={() => setActiveTab('organisational')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === 'organisational'
                      ? 'text-purple-600 bg-purple-50 border border-purple-200'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Organisational memory
                </Button>
                <Button
                  variant="light"
                  onClick={() => setActiveTab('personal')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === 'personal'
                      ? 'text-purple-600 bg-purple-50 border border-purple-200'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Personal memory
                </Button>
              </Flex>

              {activeTab === 'organisational' && (
                <>
                  {/* Top Controls Row */}
                  <Flex className="justify-between items-center mb-4">
                    <Text size="sm" className="text-gray-500">Viewing 17 organisation memories</Text>
                    
                    {/* Share Button */}
                    <Popover>
                      <PopoverTrigger>
                        <Button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center space-x-2">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-0">
                        <Box className="bg-white rounded-lg shadow-lg">
                          <Box className="p-4">
                            <Text className="text-gray-900 font-medium mb-3">Add a collaborator:</Text>
                            <Flex className="items-center">
                              <Box className="flex items-center space-x-2 px-3 py-2 border-2 border-purple-200 rounded-full bg-purple-50">
                                <Box className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                  <Text className="text-white font-semibold text-sm">J</Text>
                                </Box>
                                <Box className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                                  <Plus className="w-3 h-3 text-purple-600" />
                                </Box>
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      </PopoverContent>
                    </Popover>
                  </Flex>

                  {/* Search and Sort Controls Row */}
                  <Flex className="items-center space-x-4 mb-4">
                    {/* Search Input */}
                    <Box className="relative flex-1">
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search memories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </Box>
                    
                    {/* Sort Dropdown */}
                    <Box className="flex items-center space-x-2 w-1/3">
                      <Text size="sm" className="text-gray-700 font-medium">Sort by:</Text>
                      <Box className="relative flex-1">
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="recent">Most recent</option>
                          <option value="oldest">Oldest first</option>
                          <option value="alphabetical">A-Z</option>
                        </select>
                        <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      </Box>
                    </Box>
                  </Flex>

                  {/* Add Memory Input Field */}
                  <Box className="w-full mb-0 mt-12">
                    <Text size="lg" className="text-gray-900 font-semibold mb-4">Add a new memory</Text>
                    <VStack spacing={3} className="w-full">
                      <textarea
                        placeholder="Enter your memory here..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      />
                      <Flex className="justify-end w-full">
                        <Button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium">
                          Save
                        </Button>
                      </Flex>
                    </VStack>
                  </Box>

                  {/* Organisational Memory Content */}
                  <VStack spacing={8} className="w-full">
                    {/* Memories to Address Section */}
                    <Box className="w-full mt-6">
                      <Text size="lg" className="text-gray-900 font-semibold mb-4">Memories to Address</Text>
                      <VStack spacing={3} className="w-full">
                        {/* Memory to Address Card 1 */}
                        <Box className="w-full p-4 bg-white border-2 border-purple-200 rounded-lg">
                          <Flex className="justify-between items-start">
                            <Box className="flex-1">
                              <Text size="md" className="text-gray-900 mb-1">The company recently updated its data retention policy to 7 years for financial records.</Text>
                              <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-22</Text>
                              <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                              >
                                <File className="w-3 h-3 mr-1" />
                                Data Policy v3.2.pdf
                              </Button>
                            </Box>
                            <Flex className="space-x-2">
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 border border-green-200"
                              >
                                Accept
                              </Button>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
                              >
                                Reject
                              </Button>
                            </Flex>
                          </Flex>
                        </Box>

                        {/* Memory to Address Card 2 */}
                        <Box className="w-full p-4 bg-white border-2 border-purple-200 rounded-lg">
                          <Flex className="justify-between items-start">
                            <Box className="flex-1">
                              <Text size="md" className="text-gray-900 mb-1">The company now offers 24/7 customer support during peak seasons.</Text>
                              <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-21</Text>
                              <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                              >
                                <BookOpen className="w-3 h-3 mr-1" />
                                Support Playbook
                              </Button>
                            </Box>
                            <Flex className="space-x-2">
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 border border-green-200"
                              >
                                Accept
                              </Button>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
                              >
                                Reject
                              </Button>
                            </Flex>
                          </Flex>
                        </Box>
                      </VStack>
                    </Box>

                    {/* Saved Memories Section */}
                    <Box className="w-full">
                      <Text size="lg" className="text-gray-900 font-semibold mb-4">Saved Memories</Text>
                      <VStack spacing={3} className="w-full">
                  {/* Memory Card 1 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The business name is SwiftSupply Ltd.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-15 • Last used: 2024-01-20</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Business Profile
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 2 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company is a Private Limited Company (Ltd) registered in England & Wales.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-14 • Last used: 2024-01-19</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Company Registration.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 3 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The customer-facing brand name is &apos;SwiftSupply&apos;.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-13 • Last used: 2024-01-18</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Flex className="flex-wrap gap-2">
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <BookOpen className="w-3 h-3 mr-1" />
                            Brand Guidelines
                          </Button>
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <File className="w-3 h-3 mr-1" />
                            Marketing Playbook
                          </Button>
                        </Flex>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 4 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company operates in the B2B SaaS sector, providing a supply chain management platform.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-12 • Last used: 2024-01-17</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Business Profile
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 5 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s registered address is 14 Old Street, London, EC1V 9HQ, United Kingdom.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-11 • Last used: 2024-01-16</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Company Registration.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 6 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s governing law and jurisdiction is England & Wales.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-10 • Last used: 2024-01-15</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Business Profile
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 7 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s risk appetite is medium, conservative on liability & indemnities but flexible on commercial terms.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-09 • Last used: 2024-01-14</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Business Profile
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 8 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company is subject to FCA (for financial data handling) and ICO (for GDPR compliance) regulations.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-08 • Last used: 2024-01-13</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Compliance Guide.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 9 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s default currency is GBP (£).</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-07 • Last used: 2024-01-12</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Business Profile
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 10 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s preferred contract language is English (with German translation on request).</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-06 • Last used: 2024-01-11</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Layout className="w-3 h-3 mr-1" />
                          Contract Template
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 11 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s standard contract length is 2-year fixed term, auto-renewing annually thereafter.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-05 • Last used: 2024-01-10</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Layout className="w-3 h-3 mr-1" />
                          Contract Template
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 12 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s signature authority format requires two directors or one director + company secretary.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-04 • Last used: 2024-01-09</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Legal Terms.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 13 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s corporate structure includes parent: SwiftSupply Holdings Ltd (UK), subsidiary: SwiftSupply GmbH (Germany).</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-03 • Last used: 2024-01-08</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Corporate Structure.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 14 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company&apos;s website is https://www.swiftsupply.com.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-02 • Last used: 2024-01-07</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <Layout className="w-3 h-3 mr-1" />
                          Website Template
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 15 - New from Document */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company follows GDPR compliance standards for data handling.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-21 • Last used: 2024-01-22</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          Privacy Policy v2.1.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 16 - New from Playbook */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Customer onboarding process takes 3-5 business days.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-20 • Last used: 2024-01-21</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Customer Success Playbook
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Memory Card 17 - Multiple Sources */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">The company uses a 2-year contract term with annual auto-renewal.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-19 • Last used: 2024-01-20</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Flex className="flex-wrap gap-2">
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <Layout className="w-3 h-3 mr-1" />
                            Contract Template
                          </Button>
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <File className="w-3 h-3 mr-1" />
                            Legal Terms.pdf
                          </Button>
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <Settings className="w-3 h-3 mr-1" />
                            Business Profile
                          </Button>
                        </Flex>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                      </VStack>
                    </Box>
                  </VStack>
                </>
              )}

              {activeTab === 'personal' && (
                <>
                  {/* Top Controls Row */}
                  <Flex className="justify-between items-center mb-4">
                    <Text size="sm" className="text-gray-500">Viewing 8 personal memories</Text>
                  </Flex>

                  {/* Search and Sort Controls Row */}
                  <Flex className="items-center space-x-4 mb-4">
                    {/* Search Input */}
                    <Box className="relative flex-1">
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search memories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </Box>
                    
                    {/* Sort Dropdown */}
                    <Box className="flex items-center space-x-2 w-1/3">
                      <Text size="sm" className="text-gray-700 font-medium">Sort by:</Text>
                      <Box className="relative flex-1">
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="recent">Most recent</option>
                          <option value="oldest">Oldest first</option>
                          <option value="alphabetical">A-Z</option>
                        </select>
                        <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      </Box>
                    </Box>
                  </Flex>

                  {/* Add Memory Input Field */}
                  <Box className="w-full mb-0 mt-12">
                    <Text size="lg" className="text-gray-900 font-semibold mb-4">Add a new memory</Text>
                    <VStack spacing={3} className="w-full">
                      <textarea
                        placeholder="Enter your memory here..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      />
                      <Flex className="justify-end w-full">
                        <Button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium">
                          Save
                        </Button>
                      </Flex>
                    </VStack>
                  </Box>

                  {/* Personal Memory Content */}
                  <VStack spacing={8} className="w-full">
                    {/* Memories to Address Section */}
                    <Box className="w-full mt-6">
                      <Text size="lg" className="text-gray-900 font-semibold mb-4">Memories to Address</Text>
                      <VStack spacing={3} className="w-full">
                        {/* Memory to Address Card 1 */}
                        <Box className="w-full p-4 bg-white border-2 border-purple-200 rounded-lg">
                          <Flex className="justify-between items-start">
                            <Box className="flex-1">
                              <Text size="md" className="text-gray-900 mb-1">User prefers to receive weekly summary emails instead of daily notifications.</Text>
                              <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-22</Text>
                              <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                              >
                                <BookOpen className="w-3 h-3 mr-1" />
                                Communication Preferences
                              </Button>
                            </Box>
                            <Flex className="space-x-2">
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 border border-green-200"
                              >
                                Accept
                              </Button>
                              <Button
                                variant="light"
                                size="sm"
                                className="px-3 py-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
                              >
                                Reject
                              </Button>
                            </Flex>
                          </Flex>
                        </Box>
                      </VStack>
                    </Box>

                    {/* Saved Memories Section */}
                    <Box className="w-full">
                      <Text size="lg" className="text-gray-900 font-semibold mb-4">Saved Memories</Text>
                      <VStack spacing={3} className="w-full">
                  {/* Personal Memory Card 1 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Prefers concise, professional communication style in all interactions.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-12 • Last used: 2024-01-17</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Communication Preferences
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 2 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Likes to receive step-by-step instructions with clear action items.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-11 • Last used: 2024-01-16</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <File className="w-3 h-3 mr-1" />
                          User Manual.pdf
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 3 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Prefers morning notifications and updates rather than evening communications.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-10 • Last used: 2024-01-15</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Communication Preferences
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 4 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Enjoys visual aids and diagrams when explaining complex concepts.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-09 • Last used: 2024-01-14</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Learning Preferences
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 5 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Prefers bullet points and numbered lists for organizing information.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-08 • Last used: 2024-01-13</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Learning Preferences
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 6 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Likes to be asked for confirmation before making significant changes.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-07 • Last used: 2024-01-12</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Button
                          variant="light"
                          size="sm"
                          className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          User Preferences
                        </Button>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 7 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Prefers email summaries of important decisions and action items.</Text>
                        <Text size="sm" className="text-gray-500">Added: 2024-01-06 • Last used: 2024-01-11</Text>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>

                  {/* Personal Memory Card 8 */}
                  <Box className="w-full p-4 bg-white border border-gray-200 rounded-lg">
                    <Flex className="justify-between items-start">
                      <Box className="flex-1">
                        <Text size="md" className="text-gray-900 mb-1">Enjoys proactive suggestions and recommendations based on past preferences.</Text>
                        <Text size="sm" className="text-gray-500 mb-2">Added: 2024-01-05 • Last used: 2024-01-10</Text>
                        <Text size="xs" className="text-gray-400 mb-2">Source:</Text>
                        <Flex className="flex-wrap gap-2">
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <Layout className="w-3 h-3 mr-1" />
                            AI Settings
                          </Button>
                          <Button
                            variant="light"
                            size="sm"
                            className="px-3 py-1 text-xs text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200"
                          >
                            <BookOpen className="w-3 h-3 mr-1" />
                            User Guide
                          </Button>
                        </Flex>
                      </Box>
                      <Flex className="space-x-1">
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                      </VStack>
                    </Box>
                  </VStack>
                </>
              )}
            </Box>

            {/* Footer */}
            <Box className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <Text size="sm" className="text-gray-600">Active memories will be used to inform AI responses in this chat session</Text>
              <Flex className="space-x-3">
                <Button
                  variant="light"
                  className="px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  Cancel
                </Button>
                <Button
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium"
                >
                  Save Changes
                </Button>
              </Flex>
            </Box>

          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
