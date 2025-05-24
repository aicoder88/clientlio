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
  Users,
  Building,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function CRMPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock CRM data
  const clients = [
    {
      id: 1,
      name: "Acme Corporation",
      contact: "John Smith",
      email: "john@acme.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      lastContact: "2024-01-15",
      value: "$25,000",
      projects: 3,
      priority: "High",
    },
    {
      id: 2,
      name: "TechStart Inc",
      contact: "Sarah Johnson",
      email: "sarah@techstart.com",
      phone: "+1 (555) 987-6543",
      status: "Prospect",
      lastContact: "2024-01-12",
      value: "$15,000",
      projects: 1,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Global Solutions",
      contact: "Mike Davis",
      email: "mike@globalsolutions.com",
      phone: "+1 (555) 456-7890",
      status: "Active",
      lastContact: "2024-01-10",
      value: "$50,000",
      projects: 5,
      priority: "High",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      client: "Acme Corporation",
      status: "In Progress",
      progress: 75,
      dueDate: "2024-02-15",
      team: ["John", "Sarah", "Mike"],
    },
    {
      id: 2,
      name: "AI Chatbot Implementation",
      client: "TechStart Inc",
      status: "Planning",
      progress: 25,
      dueDate: "2024-03-01",
      team: ["Sarah", "Alex"],
    },
    {
      id: 3,
      name: "Lead Generation Campaign",
      client: "Global Solutions",
      status: "Completed",
      progress: 100,
      dueDate: "2024-01-30",
      team: ["Mike", "Lisa", "Tom"],
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Review client requirements",
      project: "Website Redesign",
      assignee: "John",
      priority: "High",
      dueDate: "2024-01-20",
      status: "Pending",
    },
    {
      id: 2,
      title: "Design mockups",
      project: "Website Redesign",
      assignee: "Sarah",
      priority: "Medium",
      dueDate: "2024-01-25",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Setup chatbot framework",
      project: "AI Chatbot Implementation",
      assignee: "Alex",
      priority: "High",
      dueDate: "2024-01-22",
      status: "Completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
        return "text-green-600 bg-green-100";
      case "prospect":
      case "planning":
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "in progress":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">CRM & Project Management</h1>
          <p className="text-gray-600 max-w-2xl">
            Manage your clients, projects, and tasks all in one place. Keep track of relationships, 
            monitor project progress, and ensure nothing falls through the cracks.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Demo Mode - Sign Up to Access Full Features
                </h3>
                <p className="text-blue-700">
                  This is a preview of our CRM system. Sign up to manage your actual clients and projects.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </a>
                <a
                  href="/sign-in"
                  className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clients.length}</div>
              <p className="text-xs text-gray-500">+2 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.filter(p => p.status !== "Completed").length}</div>
              <p className="text-xs text-gray-500">3 in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tasks.filter(t => t.status !== "Completed").length}</div>
              <p className="text-xs text-gray-500">2 due this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$90K</div>
              <p className="text-xs text-gray-500">+$15K this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Clients Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Clients</CardTitle>
                    <CardDescription>Manage your client relationships</CardDescription>
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
                    Add Client
                  </button>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      disabled={!user}
                    />
                  </div>
                  <button 
                    className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
                      user 
                        ? "border-gray-300 hover:bg-gray-50" 
                        : "border-gray-200 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Building className="h-5 w-5 text-gray-400" />
                            <h3 className="font-semibold">{client.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                              {client.status}
                            </span>
                            <Star className={`h-4 w-4 ${getPriorityColor(client.priority)}`} />
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {client.contact}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {client.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {client.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Last contact: {client.lastContact}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <div className="text-sm">
                              <span className="font-medium">{client.value}</span> • {client.projects} projects
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            className={`p-2 rounded-lg ${
                              user 
                                ? "hover:bg-gray-100" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Eye className="h-4 w-4" />
                          </button>
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
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects & Tasks Sidebar */}
          <div className="space-y-6">
            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{project.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{project.client}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Due: {project.dueDate}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3">
                      <div className="mt-1">
                        {task.status === "Completed" ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : task.priority === "High" ? (
                          <AlertCircle className="h-4 w-4 text-red-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{task.title}</h4>
                        <p className="text-xs text-gray-600">{task.project}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">{task.assignee}</span>
                          <span className="text-xs text-gray-500">{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}