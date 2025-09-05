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
  Edit3,
  Trash2,
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
  Link,
  Textarea,
} from '@/genie-ui';
import { useState } from 'react';

export default function Prompts() {
  const [prompts, setPrompts] = useState([
    {
      id: 1,
      text: "Review this contract and identify any potential legal risks or areas that need clarification",
      isEditing: false
    },
    {
      id: 2,
      text: "Draft a non-disclosure agreement for a software development partnership",
      isEditing: false
    },
    {
      id: 3,
      text: "Explain the key terms and conditions in this employment contract",
      isEditing: false
    },
    {
      id: 4,
      text: "Create a service agreement template for consulting services",
      isEditing: false
    },
    {
      id: 5,
      text: "Analyze this lease agreement and highlight any unusual clauses",
      isEditing: false
    }
  ]);

  const [editingText, setEditingText] = useState('');

  const startEditing = (prompt: { id: number; text: string; isEditing: boolean }) => {
    setEditingText(prompt.text);
    setPrompts(prompts.map(p => 
      p.id === prompt.id ? { ...p, isEditing: true } : { ...p, isEditing: false }
    ));
  };

  const saveEdit = (id: number) => {
    setPrompts(prompts.map(p => 
      p.id === id ? { ...p, text: editingText, isEditing: false } : p
    ));
  };

  const cancelEdit = (id: number) => {
    setPrompts(prompts.map(p => 
      p.id === id ? { ...p, isEditing: false } : p
    ));
  };

  const deletePrompt = (id: number) => {
    setPrompts(prompts.filter(p => p.id !== id));
  };

  const addNewPrompt = () => {
    const newId = Math.max(...prompts.map(p => p.id)) + 1;
    setPrompts([...prompts, {
      id: newId,
      text: "New prompt - click to edit",
      isEditing: true
    }]);
    setEditingText("New prompt - click to edit");
  };

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

          {/* Settings - Active */}
          <Link href="/settings" className="flex items-center space-x-2 text-purple-600 bg-purple-50 p-2 rounded-lg mb-3">
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
                <Text size="md" className="text-gray-700">Writing Preferences</Text>
              </Link>

              {/* Communication Style */}
              <Link href="/communication-style" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                <Text size="md" className="text-gray-700">Communication Style</Text>
              </Link>

              {/* Prompts - Active */}
              <Link href="/prompts" className="flex items-center space-x-3 w-full p-3 rounded-lg bg-white shadow-sm border border-purple-200">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <Text size="md" className="text-purple-700 font-medium">Prompts</Text>
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
        <Box className="flex-1 p-8 bg-gray-50 overflow-y-auto h-screen">
          {/* Page Header */}
          <Box className="mb-8">
            <Heading as="h1" size="3xl" className="text-gray-900 font-bold mb-4">
              Prompts
            </Heading>
            <Text size="lg" className="text-gray-600">
              Your go-to prompts, saved by Genie. We&apos;ll remember the questions and instructions you use most often, so you can reuse them instantly without typing them out again.
            </Text>
          </Box>

          {/* Add New Prompt Button */}
          <Box className="mb-6">
            <Button 
              variant="solid" 
              size="md" 
              onClick={addNewPrompt}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New Prompt
            </Button>
          </Box>

          {/* Prompts List */}
          <VStack spacing={4}>
            {prompts.map((prompt) => (
              <Box key={prompt.id} className="w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                {prompt.isEditing ? (
                  <VStack spacing={4} align="start">
                    <Textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg resize-none"
                      placeholder="Enter your prompt here..."
                    />
                    <Flex className="space-x-3">
                      <Button 
                        variant="solid" 
                        size="md" 
                        onClick={() => saveEdit(prompt.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Save
                      </Button>
                      <Button 
                        variant="light" 
                        size="md" 
                        onClick={() => cancelEdit(prompt.id)}
                      >
                        Cancel
                      </Button>
                    </Flex>
                  </VStack>
                ) : (
                  <Flex justify="between" align="start">
                    <Text size="lg" className="text-gray-800 flex-1 mr-4">
                      {prompt.text}
                    </Text>
                    <Flex className="space-x-2 flex-shrink-0">
                      <Button 
                        variant="light" 
                        size="sm" 
                        onClick={() => startEditing(prompt)}
                        className="p-2"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="light" 
                        size="sm" 
                        onClick={() => deletePrompt(prompt.id)}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </Flex>
                  </Flex>
                )}
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
