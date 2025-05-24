import DashboardNavbar from "@/components/dashboard-navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InfoIcon,
  UserCircle,
  BarChart3,
  Mail,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock data - in a real app, this would come from API calls
  const mockData = {
    emailSends: {
      total: user ? 2547 : 1234,
      change: user ? 12.5 : 8.3,
      positive: true,
    },
    newLeads: {
      total: user ? 384 : 156,
      change: user ? 8.2 : 5.7,
      positive: true,
    },
    conversionRate: {
      total: user ? 15.3 : 12.8,
      change: user ? -2.4 : 3.2,
      positive: user ? false : true,
    },
    topLeadSources: [
      { name: "Organic Search", percentage: 42 },
      { name: "Social Media", percentage: 28 },
      { name: "Referral", percentage: 18 },
      { name: "Direct", percentage: 12 },
    ],
  };

  return (
    <>
      <DashboardNavbar />
      <main className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
              {user ? "Welcome to your Dashboard" : "Dashboard Preview"}
            </h1>
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg text-sm p-3 px-4 rounded-lg border border-white/20 dark:border-gray-700/30 shadow-sm flex gap-2 items-center">
              <InfoIcon size="14" />
              <span>
                {user
                  ? "Here's an overview of your AI services performance"
                  : "This is a demo of what your dashboard could look like. Sign up to get started!"
                }
              </span>
            </div>
            {!user && (
              <div className="bg-blue-600/20 dark:bg-blue-800/20 backdrop-blur-lg text-sm p-4 rounded-lg border border-blue-500/30 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-100">
                      Ready to get started with AI-powered business tools?
                    </p>
                    <p className="text-blue-700 dark:text-blue-200">
                      Sign up now to access your personalized dashboard and start growing your business.
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
                      className="px-4 py-2 bg-white/20 text-blue-900 dark:text-blue-100 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Sends Card */}
            <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">
                    Email Sends
                  </CardTitle>
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <CardDescription>Total emails sent this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold">
                    {mockData.emailSends.total.toLocaleString()}
                  </div>
                  <div
                    className={`flex items-center ${mockData.emailSends.positive ? "text-green-500" : "text-red-500"}`}
                  >
                    {mockData.emailSends.positive ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">
                      {mockData.emailSends.change}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Leads Card */}
            <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">
                    New Leads
                  </CardTitle>
                  <Users className="h-5 w-5 text-indigo-500" />
                </div>
                <CardDescription>
                  New leads generated this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold">
                    {mockData.newLeads.total}
                  </div>
                  <div
                    className={`flex items-center ${mockData.newLeads.positive ? "text-green-500" : "text-red-500"}`}
                  >
                    {mockData.newLeads.positive ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">
                      {mockData.newLeads.change}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Rate Card */}
            <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">
                    Conversion Rate
                  </CardTitle>
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                </div>
                <CardDescription>Average conversion percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold">
                    {mockData.conversionRate.total}%
                  </div>
                  <div
                    className={`flex items-center ${mockData.conversionRate.positive ? "text-green-500" : "text-red-500"}`}
                  >
                    {mockData.conversionRate.positive ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">
                      {mockData.conversionRate.change}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Lead Sources Chart */}
            <Card className="lg:col-span-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg">
              <CardHeader>
                <CardTitle>Top Lead Sources</CardTitle>
                <CardDescription>
                  Where your leads are coming from
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.topLeadSources.map((source, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          {source.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {source.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-indigo-500" : index === 2 ? "bg-purple-500" : "bg-pink-500"}`}
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Profile Section */}
            <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <UserCircle size={48} className="text-primary" />
                  <div>
                    <CardTitle>{user ? "User Profile" : "Demo Profile"}</CardTitle>
                    <CardDescription>
                      {user ? user.email : "demo@clientlio.com"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {user ? (
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4 overflow-hidden">
                    <pre className="text-xs font-mono max-h-48 overflow-auto">
                      {JSON.stringify(user, null, 2)}
                    </pre>
                  </div>
                ) : (
                  <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      This is a preview of your user profile section. When you sign up, you'll see:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Account information and settings
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Subscription details and billing
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        API keys and integrations
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Usage statistics and limits
                      </li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Data Upload Section */}
          <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg">
            <CardHeader>
              <CardTitle>
                {user ? "Update Dashboard Data" : "Data Management Features"}
              </CardTitle>
              <CardDescription>
                {user
                  ? "Upload new data or connect to external APIs"
                  : "See what data management features are available"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                {user ? (
                  <>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Connect API</span>
                    </button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Upload Email Data</span>
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Import Leads</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-not-allowed">
                      <BarChart3 className="h-4 w-4" />
                      <span>Connect API</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-not-allowed">
                      <Mail className="h-4 w-4" />
                      <span>Upload Email Data</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-not-allowed">
                      <Users className="h-4 w-4" />
                      <span>Import Leads</span>
                    </div>
                  </>
                )}
              </div>
              {!user && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Sign up to unlock these powerful data management features and start integrating your business data.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
