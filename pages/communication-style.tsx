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
  Target,
  PenTool,
  MessageSquare,
  Lightbulb
} from 'lucide-react';
import {
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  Text,
  Link
} from '@/genie-ui';
import { useState } from 'react';

export default function CommunicationStyle() {
  const [preferences, setPreferences] = useState({
    verbosity: 'detailed',
    register: 'technical',
    justification: 'always',
    audience: 'internal'
  });

  const updatePreference = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Box className="min-h-screen bg-white">
      <Flex className="min-h-screen">
        {/* Left Sidebar - Copied from index.tsx */}
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
          <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 mb-3">
            <SettingsIcon className="w-4 h-4" />
            <Text size="sm">Settings & Members</Text>
          </Link>
        </Box>

        {/* Right Navigation Bar */}
        <Box className="w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col h-screen">
          <VStack spacing={4} className="h-full">
            {/* Settings Navigation Items */}
            <VStack spacing={2} className="flex-1">
              {/* Business Profile */}
              <Link href="/settings" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200">
                <Building2 className="w-5 h-5 text-gray-600" />
                <Text size="md" className="text-gray-700">Business Profile</Text>
              </Link>

              {/* Writing Preferences */}
              <Link href="/settings" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200">
                <PenTool className="w-5 h-5 text-gray-600" />
                <Text size="md" className="text-gray-700">Writing Preferences</Text>
              </Link>

              {/* Communication Style - Active */}
              <Link href="/communication-style" className="flex items-center space-x-3 w-full p-3 rounded-lg bg-white shadow-sm border border-purple-200">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <Text size="md" className="text-purple-700 font-medium">Communication Style</Text>
              </Link>

              {/* Prompts */}
              <Link href="/prompts" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200">
                <Lightbulb className="w-5 h-5 text-gray-600" />
                <Text size="md" className="text-gray-700">Prompts</Text>
              </Link>

              {/* Other Settings */}
              <Link href="#" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200">
                <SettingsIcon className="w-5 h-5 text-gray-600" />
                <Text size="md" className="text-gray-700">Other Settings</Text>
              </Link>
            </VStack>

            {/* Sign Out Button */}
            <Box className="mt-auto">
              <Button
                variant="light"
                size="md"
                className="w-full p-3 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </Box>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box className="flex-1 p-6 bg-gray-50 overflow-y-auto h-screen">
          {/* Page Header */}
          <Box className="mb-6">
            <Flex align="center" className="mb-3">
              <Target className="w-6 h-6 text-purple-600 mr-2" />
              <Heading as="h1" size="2xl" className="text-gray-900 font-bold">
                Communication Style
              </Heading>
            </Flex>
            <Text size="md" className="text-gray-600">
              Customize how Genie communicates with you. Set your preferences for explanations, language style, and output format.
            </Text>
          </Box>

          {/* Verbosity Section */}
          <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
            <Text size="lg" className="font-bold text-gray-900 mb-3">How much detail do you want?</Text>
            <Box className="border border-gray-200 rounded-lg p-1 mb-2 inline-block">
              <Flex className="space-x-0">
                <Button
                  variant={preferences.verbosity === 'quick' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('verbosity', 'quick')}
                  className={`w-32 rounded-r-none border-r border-gray-200 ${
                    preferences.verbosity === 'quick' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Quick Headlines
                </Button>
                <Button
                  variant={preferences.verbosity === 'detailed' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('verbosity', 'detailed')}
                  className={`w-32 rounded-l-none ${
                    preferences.verbosity === 'detailed' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Detailed Analysis
                </Button>
              </Flex>
            </Box>
            <Text size="sm" className="text-gray-600">
              {preferences.verbosity === 'quick' 
                ? 'Quick Headlines (default): Get concise summaries and key points for fast review.'
                : 'Detailed Analysis (default): Receive comprehensive explanations with step-by-step reasoning.'
              }
            </Text>
          </Box>

          {/* Register Section */}
          <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
            <Text size="lg" className="font-bold text-gray-900 mb-3">What kind of language should Genie use when talking to you?</Text>
            <Box className="border border-gray-200 rounded-lg p-1 mb-2 inline-block">
              <Flex className="space-x-0">
                <Button
                  variant={preferences.register === 'plain' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('register', 'plain')}
                  className={`w-32 rounded-r-none border-r border-gray-200 ${
                    preferences.register === 'plain' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Plain Language
                </Button>
                <Button
                  variant={preferences.register === 'technical' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('register', 'technical')}
                  className={`w-32 rounded-l-none ${
                    preferences.register === 'technical' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Technical Legal
                </Button>
              </Flex>
            </Box>
            <Text size="sm" className="text-gray-600">
              {preferences.register === 'plain' 
                ? 'Plain Language (default): "This clause is risky because..." - Simple explanations anyone can understand.'
                : 'Technical Legal (default): Use precise legal terminology and cite relevant statutes and case law.'
              }
            </Text>
          </Box>

          {/* Justification Section */}
          <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
            <Text size="lg" className="font-bold text-gray-900 mb-3">Should Genie explain its reasoning?</Text>
            <Box className="border border-gray-200 rounded-lg p-1 mb-2 inline-block">
              <Flex className="space-x-0">
                <Button
                  variant={preferences.justification === 'always' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('justification', 'always')}
                  className={`w-32 rounded-r-none border-r border-gray-200 ${
                    preferences.justification === 'always' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Always Explain
                </Button>
                <Button
                  variant={preferences.justification === 'just-clause' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('justification', 'just-clause')}
                  className={`w-32 rounded-l-none ${
                    preferences.justification === 'just-clause' ? 'bg-purple-700 hover:bg-purple-800' : ''
                  }`}
                >
                  Just Give Clause
                </Button>
              </Flex>
            </Box>
            <Text size="sm" className="text-gray-600">
              {preferences.justification === 'always' 
                ? 'Always Explain (default): Genie will explain why it suggests each clause and what risks it addresses.'
                : 'Just Give Clause (default): Provide the suggested language without detailed explanations.'
              }
            </Text>
          </Box>

          {/* Audience Framing Section */}
          <Box className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
            <Text size="lg" className="font-bold text-gray-900 mb-3">Who is this explanation for?</Text>
            <Box className="border border-gray-200 rounded-lg p-1 mb-2 inline-block">
              <Flex className="space-x-0">
                <Button
                  variant={preferences.audience === 'board' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('audience', 'board')}
                  className={`w-28 rounded-r-none border-r border-gray-200 ${
                    preferences.audience === 'board' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Board Level
                </Button>
                <Button
                  variant={preferences.audience === 'internal' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('audience', 'internal')}
                  className={`w-28 border-r border-gray-200 ${
                    preferences.audience === 'internal' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Internal Legal Team
                </Button>
                <Button
                  variant={preferences.audience === 'counterparty' ? 'solid' : 'light'}
                  size="md"
                  onClick={() => updatePreference('audience', 'counterparty')}
                  className={`w-28 rounded-l-none ${
                    preferences.audience === 'counterparty' ? 'bg-purple-600 hover:bg-purple-700' : ''
                  }`}
                >
                  Counterparty Facing
                </Button>
              </Flex>
            </Box>
            <Text size="sm" className="text-gray-600">
              {preferences.audience === 'board' 
                ? 'Board Level (default): High-level summaries focused on business impact and key risks.'
                : preferences.audience === 'internal' 
                ? 'Internal Legal Team (default): Detailed technical analysis with internal notes and considerations.'
                : 'Counterparty Facing (default): Professional explanations suitable for external stakeholders.'
              }
            </Text>
          </Box>

          {/* Save Button */}
          <Box className="mt-6">
            <Button
              variant="solid"
              size="md"
              className="bg-purple-600 hover:bg-purple-700"
            >
              Save Preferences
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
