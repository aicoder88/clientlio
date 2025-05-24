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
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Filter,
  Download,
  Plus,
  Search,
  Eye,
  Star,
  Calendar,
  MapPin,
  Building,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function LeadGenerationPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock lead data
  const leads = [
    {
      id: 1,
      name: "Jennifer Wilson",
      company: "TechCorp Solutions",
      email: "jennifer@techcorp.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      score: 92,
      status: "Hot",
      source: "Website",
      lastActivity: "2024-01-18",
      value: "$15,000",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Robert Chen",
      company: "Digital Dynamics",
      email: "robert@digitaldynamics.com",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      score: 78,
      status: "Warm",
      source: "LinkedIn",
      lastActivity: "2024-01-17",
      value: "$8,500",
      industry: "Marketing",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Growth Partners",
      email: "maria@growthpartners.com",
      phone: "+1 (555) 456-7890",
      location: "Austin, TX",
      score: 65,
      status: "Cold",
      source: "Referral",
      lastActivity: "2024-01-15",
      value: "$12,000",
      industry: "Consulting",
    },
    {
      id: 4,
      name: "David Kim",
      company: "StartupX",
      email: "david@startupx.com",
      phone: "+1 (555) 321-0987",
      location: "Seattle, WA",
      score: 88,
      status: "Hot",
      source: "Google Ads",
      lastActivity: "2024-01-19",
      value: "$22,000",
      industry: "SaaS",
    },
  ];

  const leadSources = [
    { name: "Website", count: 45, percentage: 35, change: 12 },
    { name: "LinkedIn", count: 32, percentage: 25, change: 8 },
    { name: "Google Ads", count: 28, percentage: 22, change: -3 },
    { name: "Referrals", count: 23, percentage: 18, change: 15 },
  ];

  const analytics = {
    totalLeads: 128,
    qualifiedLeads: 89,
    conversionRate: 24.5,
    avgLeadValue: 14200,
    monthlyGrowth: 18.3,
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "hot":
        return "text-red-600 bg-red-100";
      case "warm":
        return "text-yellow-600 bg-yellow-100";
      case "cold":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Lead Generation</h1>
          <p className="text-gray-600 max-w-2xl">
            AI-powered lead generation that finds your ideal customers. Track, score, and nurture 
            leads with intelligent insights and automated workflows.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Demo Mode - Sign Up to Generate Real Leads
                </h3>
                <p className="text-blue-700">
                  This is a preview of our lead generation system. Sign up to start capturing and managing real leads.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalLeads}</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +{analytics.monthlyGrowth}% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Qualified Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.qualifiedLeads}</div>
              <div className="text-sm text-gray-500">
                {Math.round((analytics.qualifiedLeads / analytics.totalLeads) * 100)}% qualification rate
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.conversionRate}%</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +2.1% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Avg Lead Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${analytics.avgLeadValue.toLocaleString()}</div>
              <div className="flex items-center text-red-600 text-sm">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -5.2% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Lead Score Avg
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <div className="text-sm text-gray-500">Out of 100</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lead List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Leads</CardTitle>
                    <CardDescription>Your latest prospects and their details</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
                        user 
                          ? "border-gray-300 hover:bg-gray-50" 
                          : "border-gray-200 text-gray-400 cursor-not-allowed"
                      } transition-colors`}
                      disabled={!user}
                    >
                      <Download className="h-4 w-4" />
                      Export
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                        user 
                          ? "bg-blue-600 text-white hover:bg-blue-700" 
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } transition-colors`}
                      disabled={!user}
                    >
                      <Plus className="h-4 w-4" />
                      Add Lead
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search leads..."
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
                  {leads.map((lead) => (
                    <div key={lead.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{lead.name}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                                {lead.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                                {lead.score}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4" />
                              {lead.company}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {lead.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {lead.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {lead.location}
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex gap-4 text-sm">
                              <span><strong>Source:</strong> {lead.source}</span>
                              <span><strong>Industry:</strong> {lead.industry}</span>
                              <span><strong>Value:</strong> {lead.value}</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              Last activity: {lead.lastActivity}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
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
                                ? "hover:bg-blue-100 text-blue-600" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Mail className="h-4 w-4" />
                          </button>
                          <button 
                            className={`p-2 rounded-lg ${
                              user 
                                ? "hover:bg-green-100 text-green-600" 
                                : "text-gray-400 cursor-not-allowed"
                            } transition-colors`}
                            disabled={!user}
                          >
                            <Phone className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lead Sources & Analytics */}
          <div className="space-y-6">
            {/* Lead Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lead Sources</CardTitle>
                <CardDescription>Where your leads are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leadSources.map((source, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{source.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{source.count}</span>
                          <span className={`text-xs ${source.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {source.change > 0 ? '+' : ''}{source.change}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              index === 0 ? "bg-blue-500" : 
                              index === 1 ? "bg-indigo-500" : 
                              index === 2 ? "bg-purple-500" : "bg-pink-500"
                            }`}
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-8">{source.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lead Scoring */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lead Scoring</CardTitle>
                <CardDescription>AI-powered lead qualification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <div>
                      <div className="font-medium text-red-900">Hot Leads</div>
                      <div className="text-sm text-red-700">Score 80-100</div>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      {leads.filter(l => l.score >= 80).length}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium text-yellow-900">Warm Leads</div>
                      <div className="text-sm text-yellow-700">Score 60-79</div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
                      {leads.filter(l => l.score >= 60 && l.score < 80).length}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Cold Leads</div>
                      <div className="text-sm text-blue-700">Score 0-59</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {leads.filter(l => l.score < 60).length}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button 
                    className={`w-full p-3 rounded-lg border text-left ${
                      user 
                        ? "border-gray-300 hover:bg-gray-50" 
                        : "border-gray-200 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    <div className="font-medium">Import Leads</div>
                    <div className="text-sm text-gray-600">Upload CSV or connect CRM</div>
                  </button>
                  
                  <button 
                    className={`w-full p-3 rounded-lg border text-left ${
                      user 
                        ? "border-gray-300 hover:bg-gray-50" 
                        : "border-gray-200 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    <div className="font-medium">Setup Lead Capture</div>
                    <div className="text-sm text-gray-600">Add forms to your website</div>
                  </button>
                  
                  <button 
                    className={`w-full p-3 rounded-lg border text-left ${
                      user 
                        ? "border-gray-300 hover:bg-gray-50" 
                        : "border-gray-200 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                    disabled={!user}
                  >
                    <div className="font-medium">Configure Scoring</div>
                    <div className="text-sm text-gray-600">Customize lead scoring rules</div>
                  </button>
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