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
  Zap,
  Play,
  Pause,
  Edit,
  Copy,
  Plus,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Mail,
  Calendar,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  TrendingUp,
  ArrowRight,
  GitBranch,
  Timer,
  Target,
  Workflow,
  Bot,
  Filter,
} from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function AutomationPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock automation data
  const automations = [
    {
      id: 1,
      name: "Lead Nurturing Sequence",
      description: "Automatically send follow-up emails to new leads",
      status: "Active",
      trigger: "New Lead Created",
      actions: 5,
      executions: 1247,
      successRate: 94.2,
      lastRun: "2024-01-18 14:30",
      category: "Marketing",
    },
    {
      id: 2,
      name: "Customer Onboarding",
      description: "Welcome new customers and guide them through setup",
      status: "Active",
      trigger: "Customer Signup",
      actions: 8,
      executions: 892,
      successRate: 97.8,
      lastRun: "2024-01-18 16:45",
      category: "Customer Success",
    },
    {
      id: 3,
      name: "Invoice Reminder",
      description: "Send payment reminders for overdue invoices",
      status: "Paused",
      trigger: "Invoice Overdue",
      actions: 3,
      executions: 156,
      successRate: 89.1,
      lastRun: "2024-01-15 09:00",
      category: "Finance",
    },
    {
      id: 4,
      name: "Support Ticket Routing",
      description: "Automatically assign support tickets to the right team",
      status: "Active",
      trigger: "New Support Ticket",
      actions: 4,
      executions: 2341,
      successRate: 91.7,
      lastRun: "2024-01-18 17:12",
      category: "Support",
    },
  ];

  const analytics = {
    totalAutomations: 12,
    activeAutomations: 9,
    totalExecutions: 4636,
    avgSuccessRate: 93.2,
    timeSaved: "127 hours",
    costSavings: "$8,420",
  };

  const templates = [
    {
      name: "Email Marketing Sequence",
      description: "Automated email campaigns for lead nurturing",
      category: "Marketing",
      triggers: ["New Lead", "Form Submission", "Website Visit"],
      actions: ["Send Email", "Add to List", "Update CRM"],
      complexity: "Beginner",
    },
    {
      name: "Customer Support Workflow",
      description: "Route and manage customer support requests",
      category: "Support",
      triggers: ["New Ticket", "Escalation", "Customer Reply"],
      actions: ["Assign Agent", "Send Response", "Update Status"],
      complexity: "Intermediate",
    },
    {
      name: "Sales Pipeline Management",
      description: "Automate lead qualification and follow-up",
      category: "Sales",
      triggers: ["Lead Score Change", "Demo Scheduled", "Proposal Sent"],
      actions: ["Update Stage", "Notify Sales Rep", "Schedule Follow-up"],
      complexity: "Advanced",
    },
    {
      name: "Social Media Publishing",
      description: "Schedule and publish content across platforms",
      category: "Marketing",
      triggers: ["Content Approved", "Scheduled Time", "Event Trigger"],
      actions: ["Post Content", "Track Engagement", "Generate Report"],
      complexity: "Beginner",
    },
  ];

  const recentExecutions = [
    {
      automation: "Lead Nurturing Sequence",
      trigger: "New lead: John Smith",
      status: "Success",
      timestamp: "2024-01-18 17:45",
      duration: "2.3s",
    },
    {
      automation: "Customer Onboarding",
      trigger: "New signup: TechCorp",
      status: "Success",
      timestamp: "2024-01-18 17:30",
      duration: "1.8s",
    },
    {
      automation: "Support Ticket Routing",
      trigger: "Ticket #1234 created",
      status: "Success",
      timestamp: "2024-01-18 17:12",
      duration: "0.9s",
    },
    {
      automation: "Lead Nurturing Sequence",
      trigger: "New lead: Sarah Wilson",
      status: "Failed",
      timestamp: "2024-01-18 16:55",
      duration: "5.2s",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600 bg-green-100";
      case "paused":
        return "text-yellow-600 bg-yellow-100";
      case "draft":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getExecutionStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      case "running":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case "beginner":
        return "text-green-600 bg-green-100";
      case "intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "advanced":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Workflow Automation</h1>
          <p className="text-gray-600 max-w-2xl">
            Streamline your operations with intelligent workflow automation. 
            Eliminate repetitive tasks, reduce errors, and free up your team to focus on high-value activities.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Demo Mode - Sign Up to Automate Your Workflows
                </h3>
                <p className="text-blue-700">
                  This is a preview of our automation platform. Sign up to create and deploy your own automated workflows.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Automating
                </a>
                <a
                  href="/pricing"
                  className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Plans
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
                <Workflow className="h-4 w-4" />
                Total Automations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalAutomations}</div>
              <div className="text-sm text-gray-500">{analytics.activeAutomations} active</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Executions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalExecutions.toLocaleString()}</div>
              <div className="text-sm text-gray-500">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgSuccessRate}%</div>
              <div className="text-sm text-gray-500">Average</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time Saved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.timeSaved}</div>
              <div className="text-sm text-gray-500">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Cost Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.costSavings}</div>
              <div className="text-sm text-gray-500">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Efficiency Gain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">340%</div>
              <div className="text-sm text-gray-500">vs manual</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Automation List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Automations</CardTitle>
                    <CardDescription>Manage and monitor your automated workflows</CardDescription>
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
                    New Automation
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automations.map((automation) => (
                    <div key={automation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Zap className="h-5 w-5 text-blue-600" />
                            <h3 className="font-semibold">{automation.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(automation.status)}`}>
                              {automation.status}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {automation.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{automation.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Trigger:</span>
                              <div className="font-medium">{automation.trigger}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Actions:</span>
                              <div className="font-medium">{automation.actions}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Executions:</span>
                              <div className="font-medium">{automation.executions.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Success Rate:</span>
                              <div className="font-medium text-green-600">{automation.successRate}%</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          {automation.status === "Active" ? (
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
                        Last run: {automation.lastRun}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Executions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Executions</CardTitle>
                <CardDescription>Latest automation runs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExecutions.map((execution, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{execution.automation}</h4>
                        <span className={`text-xs font-medium ${getExecutionStatusColor(execution.status)}`}>
                          {execution.status === "Success" ? (
                            <CheckCircle className="h-3 w-3 inline mr-1" />
                          ) : (
                            <AlertCircle className="h-3 w-3 inline mr-1" />
                          )}
                          {execution.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{execution.trigger}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{execution.timestamp}</span>
                        <span>{execution.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Automation Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Automation Templates</CardTitle>
            <CardDescription>Get started quickly with pre-built workflow templates</CardDescription>
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
                      {index === 0 ? <Mail className="h-5 w-5" /> :
                       index === 1 ? <Users className="h-5 w-5" /> :
                       index === 2 ? <BarChart3 className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{template.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {template.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${getComplexityColor(template.complexity)}`}>
                          {template.complexity}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs font-medium text-gray-700 mb-1">Triggers:</div>
                      <div className="flex flex-wrap gap-1">
                        {template.triggers.slice(0, 2).map((trigger, i) => (
                          <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {trigger}
                          </span>
                        ))}
                        {template.triggers.length > 2 && (
                          <span className="text-xs text-gray-500">+{template.triggers.length - 2}</span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-700 mb-1">Actions:</div>
                      <div className="flex flex-wrap gap-1">
                        {template.actions.slice(0, 2).map((action, i) => (
                          <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {action}
                          </span>
                        ))}
                        {template.actions.length > 2 && (
                          <span className="text-xs text-gray-500">+{template.actions.length - 2}</span>
                        )}
                      </div>
                    </div>
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
                  <GitBranch className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Visual Workflow Builder</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Create complex workflows with our intuitive drag-and-drop interface. No coding required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Timer className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">Smart Triggers</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Set up intelligent triggers based on time, events, conditions, or user behavior to start your workflows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI-Powered Actions</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Leverage AI to make intelligent decisions, process data, and take actions based on complex conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}