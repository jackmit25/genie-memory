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
  ChevronDown
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
  Switch,
} from '@/genie-ui';

export default function Settings() {
  const [showRegulatoryDropdown, setShowRegulatoryDropdown] = useState(false);
  const [selectedRegulatoryBodies, setSelectedRegulatoryBodies] = useState<string[]>(['FCA', 'ICO']);
  
  const regulatoryBodies = [
    'FCA',
    'ICO', 
    'SEC',
    'GDPR',
    'HIPAA',
    'ISO 27001',
    'FCA (for financial data handling)',
    'ICO (for GDPR compliance)',
    'Other'
  ];

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

        {/* Settings Sidebar */}
        <Box className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
          <Box className="w-full">
            <Heading as="h2" size="lg" className="text-gray-900 font-semibold">
              Settings and preferences
            </Heading>
          </Box>

          {/* Settings Navigation Items */}
          <VStack spacing={2} className="flex-1">
            {/* Organisation profile */}
            <Link href="/settings/organisation-profile" className="flex items-center space-x-3 w-full p-3 rounded-lg bg-white shadow-sm border border-purple-200">
              <Building2 className="w-5 h-5 text-purple-600" />
              <Text size="md" className="text-purple-700 font-medium">Organisation profile</Text>
            </Link>

            {/* Organisation members */}
            <div className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 cursor-default">
              <Users className="w-5 h-5 text-gray-600" />
              <Text size="md" className="text-gray-700">Organisation members</Text>
            </div>

            {/* Pricing plans */}
            <div className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 cursor-default">
              <CreditCard className="w-5 h-5 text-gray-600" />
              <Text size="md" className="text-gray-700">Pricing plans</Text>
            </div>

            {/* Refer friends */}
            <div className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 cursor-default">
              <Gift className="w-5 h-5 text-gray-600" />
              <Text size="md" className="text-gray-700">Refer friends</Text>
            </div>

            {/* Billing */}
            <div className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 cursor-default">
              <CreditCard className="w-5 h-5 text-gray-600" />
              <Text size="md" className="text-gray-700">Billing</Text>
            </div>

          </VStack>

          {/* Sign Out Button */}
          <Box className="mt-auto">
            <Button
              variant="light"
              size="md"
              className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box className="flex-1 p-8 bg-gray-50 overflow-y-auto h-screen">
          {/* Page Header */}
          <Box className="mb-8">
            <Flex className="justify-between items-start">
              <Box>
                <Heading as="h1" size="3xl" className="text-gray-900 font-bold">
                  Organisation profile
                </Heading>
                <Text size="lg" className="text-gray-600 mt-2">
                  Configure your organisation information and preferences
                </Text>
              </Box>

              {/* Share Button with Dropdown and Memory Toggle */}
              <Flex className="items-center space-x-4">
                {/* Memory Toggle */}
                <Flex className="items-center space-x-2">
                  <Switch defaultSelected />
                  <Text className="text-gray-700 font-medium">Include in memory</Text>
                </Flex>

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
                      {/* Download Button */}
                      <Box className="p-4 border-b border-gray-100">
                        <Button
                          variant="light"
                          className="w-full justify-start px-3 py-2 text-left hover:bg-gray-50"
                        >
                          <Box className="flex items-center space-x-3">
                            <Box className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                              <FileText className="w-4 h-4 text-blue-600" />
                            </Box>
                            <Text className="text-gray-900 font-medium">Download as .docx</Text>
                          </Box>
                        </Button>
                      </Box>

                      {/* Add Collaborator Section */}
                      <Box className="p-4">
                        <Text className="text-gray-900 font-medium mb-3">Add a collaborator:</Text>

                        {/* Collaborator UI */}
                        <Flex className="items-center">
                          {/* Primary Collaborator Group */}
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
            </Flex>
          </Box>

          {/* Business Profile Content */}
          <VStack spacing={6} className="w-full">
            {/* Company Information Section */}
            <Box className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
              <Box className="flex items-center justify-between mb-4">
                <Heading as="h2" size="xl" className="text-gray-900 font-semibold">
                  Company Information
                </Heading>
                <Button
                  variant="light"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  Edit
                </Button>
              </Box>
              <VStack spacing={4} className="w-full">
                <Flex className="w-full space-x-4">
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Business name</Text>
                    <input
                      type="text"
                      defaultValue="SwiftSupply Ltd"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </Box>
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Entity type</Text>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option selected>Private Limited Company (Ltd)</option>
                      <option>Public Limited Company (PLC)</option>
                      <option>Limited Liability Partnership (LLP)</option>
                      <option>Partnership</option>
                      <option>Sole Trader</option>
                      <option>Corporation (US)</option>
                      <option>LLC (US)</option>
                      <option>GmbH (Germany)</option>
                      <option>SARL (France)</option>
                      <option>Other</option>
                    </select>
                  </Box>
                </Flex>
                <Flex className="w-full space-x-4">
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Sector / industry</Text>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Supply Chain & Logistics</option>
                      <option>Technology / Software</option>
                      <option>Healthcare / Medical</option>
                      <option>Finance / Banking</option>
                      <option>E-commerce / Retail</option>
                      <option>Manufacturing</option>
                      <option>Professional Services</option>
                      <option>Real Estate</option>
                      <option>Education</option>
                      <option>Energy / Utilities</option>
                      <option>Media / Entertainment</option>
                      <option>Other</option>
                    </select>
                  </Box>
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Website</Text>
                    <input
                      type="text"
                      defaultValue="https://www.swiftsupply.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </Box>
                </Flex>
                <Box className="w-full">
                  <Text size="sm" className="text-gray-700 font-medium mb-2">Corporate structure basics</Text>
                  <input
                    type="text"
                    defaultValue="Parent: SwiftSupply Holdings Ltd (UK), Subsidiary: SwiftSupply GmbH (Germany)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </Box>
              </VStack>
            </Box>

            {/* Legal & Regulatory Section */}
            <Box className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
              <Box className="flex items-center justify-between mb-4">
                <Heading as="h2" size="xl" className="text-gray-900 font-semibold">
                  Legal & Regulatory
                </Heading>
                <Button
                  variant="light"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  Edit
                </Button>
              </Box>
              <VStack spacing={4} className="w-full">
                <Flex className="w-full space-x-4">
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Governing law & jurisdiction</Text>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option selected>England & Wales</option>
                      <option>New York, USA</option>
                      <option>California, USA</option>
                      <option>Delaware, USA</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Singapore</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>India</option>
                      <option>Other</option>
                    </select>
                  </Box>
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Registered address / HQ location</Text>
                    <input
                      type="text"
                      defaultValue="14 Old Street, London, EC1V 9HQ, United Kingdom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </Box>
                </Flex>
                <Box className="w-full">
                  <Text size="sm" className="text-gray-700 font-medium mb-2">Regulatory / governing bodies (if relevant)</Text>
                  <Box className="relative">
                    <Box className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[42px] flex flex-wrap items-center gap-2 cursor-pointer" onClick={() => setShowRegulatoryDropdown(!showRegulatoryDropdown)}>
                      {selectedRegulatoryBodies.length === 0 ? (
                        <Text size="sm" className="text-gray-500">Select regulatory bodies...</Text>
                      ) : (
                        selectedRegulatoryBodies.map((body) => (
                          <Box key={body} className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            {body}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedRegulatoryBodies(selectedRegulatoryBodies.filter(b => b !== body));
                              }}
                              className="ml-1 text-purple-600 hover:text-purple-800"
                            >
                              ×
                            </button>
                          </Box>
                        ))
                      )}
                      <Box className="ml-auto">
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </Box>
                    </Box>
                    {showRegulatoryDropdown && (
                      <Box className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {regulatoryBodies.map((body) => (
                          <Box
                            key={body}
                            className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center"
                            onClick={() => {
                              if (selectedRegulatoryBodies.includes(body)) {
                                setSelectedRegulatoryBodies(selectedRegulatoryBodies.filter(b => b !== body));
                              } else {
                                setSelectedRegulatoryBodies([...selectedRegulatoryBodies, body]);
                              }
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedRegulatoryBodies.includes(body)}
                              onChange={() => {}}
                              className="mr-2"
                            />
                            <Text size="sm">{body}</Text>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box className="w-full">
                  <Text size="sm" className="text-gray-700 font-medium mb-2">Risk appetite</Text>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Low</option>
                    <option selected>Medium</option>
                    <option>High</option>
                    <option>Custom</option>
                  </select>
                </Box>
              </VStack>
            </Box>

            {/* Contract Preferences Section */}
            <Box className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
              <Box className="flex items-center justify-between mb-4">
                <Heading as="h2" size="xl" className="text-gray-900 font-semibold">
                  Contract Preferences
                </Heading>
                <Button
                  variant="light"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  Edit
                </Button>
              </Box>
              <VStack spacing={4} className="w-full">
                <Flex className="w-full space-x-4">
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Default currency</Text>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option selected>GBP (£)</option>
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>JPY (¥)</option>
                      <option>CAD (C$)</option>
                      <option>AUD (A$)</option>
                      <option>CHF (Fr)</option>
                      <option>CNY (¥)</option>
                      <option>Other</option>
                    </select>
                  </Box>
                  <Box className="flex-1">
                    <Text size="sm" className="text-gray-700 font-medium mb-2">Preferred contract language(s)</Text>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option selected>English</option>
                      <option>German</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Chinese</option>
                      <option>Japanese</option>
                      <option>Korean</option>
                      <option>Other</option>
                    </select>
                  </Box>
                </Flex>
                <Box className="w-full">
                  <Text size="sm" className="text-gray-700 font-medium mb-2">Standard contract length / renewal approach</Text>
                  <input
                    type="text"
                    defaultValue="2-year fixed term, auto-renewing annually thereafter"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </Box>
                <Box className="w-full">
                  <Text size="sm" className="text-gray-700 font-medium mb-2">Signature authority format</Text>
                  <input
                    type="text"
                    defaultValue="Two directors or one director + company secretary"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </Box>
              </VStack>
            </Box>

            {/* Additional Business Context Section */}
            <Box className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
              <Box className="flex items-center justify-between mb-4">
                <Heading as="h2" size="xl" className="text-gray-900 font-semibold">
                  Additional Business Context
                </Heading>
                <Button
                  variant="light"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  Edit
                </Button>
              </Box>
              <VStack spacing={4} className="w-full">
                <Box className="w-full">
                  <textarea
                    placeholder="Enter any additional information about your business, industry, processes, or other relevant context..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </Box>
              </VStack>
            </Box>

            {/* Save Button */}
            <Box className="w-full flex justify-end">
              <Button
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium"
              >
                Save Changes
              </Button>
            </Box>

          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}