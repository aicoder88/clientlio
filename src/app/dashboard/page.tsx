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

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock data - in a real app, this would come from API calls
  const mockData = {
    emailSends: {
      total: 2547,
      change: 12.5,
      positive: true,
    },
    newLeads: {
      total: 384,
      change: 8.2,
      positive: true,
    },
    conversionRate: {
      total: 15.3,
      change: -2.4,
      positive: false,
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
            <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg text-sm p-3 px-4 rounded-lg border border-white/20 dark:border-gray-700/30 shadow-sm flex gap-2 items-center">
              <InfoIcon size="14" />
              <span>Here's an overview of your AI services performance</span>
            </div>
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
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4 overflow-hidden">
                  <pre className="text-xs font-mono max-h-48 overflow-auto">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Upload Section */}
          <Card className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg">
            <CardHeader>
              <CardTitle>Update Dashboard Data</CardTitle>
              <CardDescription>
                Upload new data or connect to external APIs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
