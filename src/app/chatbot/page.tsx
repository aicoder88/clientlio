import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquare,
  Bot,
  Settings,
  Play,
  Pause,
  Edit,
  Copy,
  Download,
  Plus,
  Users,
  Clock,
  TrendingUp,
  Star,
  Globe,
  Smartphone,
  Mail,
  MessageCircle,
  Zap,
  Brain,
  BarChart3,
  Calendar,
} from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function ChatbotPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock chatbot data
  const chatbots = [
    {
      id: 1,
      name: "Customer Support Bot",
      description: "Handles general customer inquiries and support tickets",
      status: "Active",
      conversations: 1247,
      satisfaction: 4.6,
      responseTime: "2.3s",
      lastUpdated: "2024-01-18",
      platform: "Website",
      language: "English",
    },
    {
      id: 2,
      name: "Lead Qualification Bot",
      description: "Qualifies leads and schedules sales meetings",
      status: "Active",
      conversations: 892,
      satisfaction: 4.4,
      responseTime: "1.8s",
      lastUpdated: "2024-01-17",
      platform: "Website",
      language: "English",
    },
    {
      id: 3,
      name: "FAQ Assistant",
      description: "Answers frequently asked questions about products",
      status: "Draft",
      conversations: 0,
      satisfaction: 0,
      responseTime: "N/A",
      lastUpdated: "2024-01-15",
      platform: "Website",
      language: "English",
    },
  ];

  const analytics = {
    totalConversations: 2139,
    activeUsers: 1847,
    avgSatisfaction: 4.5,
    avgResponseTime: "2.1s",
    resolutionRate: 87.3,
    handoffRate: 12.7,
  };

  const conversationTopics = [
    { topic: "Pricing Questions", count: 456, percentage: 21.3 },
    { topic: "Technical Support", count: 389, percentage: 18.2 },
    { topic: "Product Features", count: 342, percentage: 16.0 },
    { topic: "Account Issues", count: 298, percentage: 13.9 },
    { topic: "Billing Inquiries", count: 267, percentage: 12.5 },
    { topic: "General Information", count: 387, percentage: 18.1 },
  ];

  const templates = [
    {
      name: "Customer Support",
      description: "Handle customer inquiries and support requests",
      category: "Support",
      features: ["FAQ Integration", "Ticket Creation", "Live Chat Handoff"],
    },
    {
      name: "Lead Generation",
      description: "Qualify leads and capture contact information",
      category: "Sales",
      features: ["Lead Scoring", "Calendar Integration", "CRM Sync"],
    },
    {
      name: "E-commerce Assistant",
      description: "Help customers with product recommendations and orders",
      category: "E-commerce",
      features: ["Product Catalog", "Order Tracking", "Payment Support"],
    },
    {
      name: "Appointment Booking",
      description: "Schedule appointments and manage calendars",
      category: "Scheduling",
      features: ["Calendar Sync", "Reminder Notifications", "Rescheduling"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600 bg-green-100";
      case "draft":
        return "text-yellow-600 bg-yellow-100";
      case "paused":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Chatbots</h1>
          <p className="text-gray-600 max-w-2xl">
            Create intelligent chatbots that provide 24/7 customer support, qualify leads, 
            and automate conversations. Build, deploy, and optimize your AI assistants with ease.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Demo Mode - Sign Up to Build Your Chatbot
                </h3>
                <p className="text-blue-700">
                  This is a preview of our chatbot builder. Sign up to create and deploy your own AI-powered chatbots.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Build Chatbot
                </a>
                <a
                  href="/features"
                  className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  See Features
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Conversations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalConversations.toLocaleString()}</div>
              <div className="text-sm text-gray-500">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.activeUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Unique visitors</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgSatisfaction}/5</div>
              <div className="text-sm text-gray-500">Average rating</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgResponseTime}</div>
              <div className="text-sm text-gray-500">Average</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Resolution Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.resolutionRate}%</div>
              <div className="text-sm text-gray-500">Auto-resolved</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Handoff Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.handoffRate}%</div>
              <div className="text-sm text-gray-500">To human agents</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Chatbot List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Chatbots</CardTitle>
                    <CardDescription>Manage and monitor your AI assistants</CardDescription>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                      user 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    <Plus className="h-4 w-4" />
                    New Chatbot
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chatbots.map((chatbot) => (
                    <div key={chatbot.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Bot className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold">{chatbot.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(chatbot.status)}`}>
                              {chatbot.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{chatbot.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Conversations:</span>
                              <div className="font-medium">{chatbot.conversations.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Satisfaction:</span>
                              <div className="font-medium flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500" />
                                {chatbot.satisfaction || "N/A"}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-500">Response Time:</span>
                              <div className="font-medium">{chatbot.responseTime}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Platform:</span>
                              <div className="font-medium flex items-center gap-1">
                                <Globe className="h-3 w-3" />
                                {chatbot.platform}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          {chatbot.status === "Active" ? (
                            <button 
                              className={`p-2 rounded-lg ${
                                user 
                                  ? "hover:bg-red-100 text-red-600" 
                                  : "text-gray-400 cursor-not-allowed"
                              } transition-colors`}
                              disabled={!user}
                            >
                              <Pause className="h-4 w-4" />
                            </button>
                          ) : (
                            <button 
                              className={`p-2 rounded-lg ${
                                user 
                                  ? "hover:bg-green-100 text-green-600" 
                                  : "text-gray-400 cursor-not-allowed"
                              } transition-colors`}
                              disabled={!user}
                            >
                              <Play className="h-4 w-4" />
                            </button>
                          )}
                          <button 
                            className={`p-2 rounded-lg ${
                              user 
                                ? "hover:bg-gray-100" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            className={`p-2 rounded-lg ${
                              user 
                                ? "hover:bg-gray-100" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Settings className="h-4 w-4" />
                          </button>
                          <button 
                            className={`p-2 rounded-lg ${
                              user 
                                ? "hover:bg-gray-100" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Last updated: {chatbot.lastUpdated}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversation Topics */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conversation Topics</CardTitle>
                <CardDescription>What users are asking about</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversationTopics.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{topic.topic}</span>
                        <span className="text-sm text-gray-600">{topic.count}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              index === 0 ? "bg-blue-500" : 
                              index === 1 ? "bg-indigo-500" : 
                              index === 2 ? "bg-purple-500" : 
                              index === 3 ? "bg-pink-500" : 
                              index === 4 ? "bg-green-500" : "bg-yellow-500"
                            }`}
                            style={{ width: `${topic.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-10">{topic.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chatbot Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Templates</CardTitle>
            <CardDescription>Get started quickly with pre-built chatbot templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      index === 0 ? "bg-blue-100 text-blue-600" :
                      index === 1 ? "bg-green-100 text-green-600" :
                      index === 2 ? "bg-purple-100 text-purple-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {index === 0 ? <MessageCircle className="h-5 w-5" /> :
                       index === 1 ? <Users className="h-5 w-5" /> :
                       index === 2 ? <Smartphone className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-medium text-gray-700">Features:</div>
                    {template.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium ${
                      user 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    Use Template
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI-Powered</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Advanced natural language processing ensures your chatbots understand context and provide relevant responses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Easy Integration</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deploy your chatbots across multiple platforms including websites, mobile apps, and messaging platforms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Analytics & Insights</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Track performance, analyze conversations, and continuously improve your chatbot's effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}