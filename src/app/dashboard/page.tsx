"use client";

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
  Target,
  Zap,
  Globe,
  Activity,
  DollarSign,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart,
} from "recharts";

// Mock data for visualizations
const revenueData = [
  { month: "Jan", revenue: 45000, leads: 120, conversion: 12.5 },
  { month: "Feb", revenue: 52000, leads: 145, conversion: 14.2 },
  { month: "Mar", revenue: 48000, leads: 132, conversion: 13.1 },
  { month: "Apr", revenue: 61000, leads: 168, conversion: 15.8 },
  { month: "May", revenue: 55000, leads: 156, conversion: 14.9 },
  { month: "Jun", revenue: 67000, leads: 189, conversion: 16.4 },
];

const leadSourceData = [
  { name: "Organic Search", value: 42, color: "#3B82F6" },
  { name: "Social Media", value: 28, color: "#8B5CF6" },
  { name: "Email Campaign", value: 18, color: "#10B981" },
  { name: "Referral", value: 12, color: "#F59E0B" },
];

const performanceData = [
  { name: "Email Open Rate", value: 68, fill: "#3B82F6" },
  { name: "Click Through Rate", value: 24, fill: "#8B5CF6" },
  { name: "Conversion Rate", value: 15, fill: "#10B981" },
  { name: "Bounce Rate", value: 32, fill: "#EF4444" },
];

const activityData = [
  { time: "00:00", emails: 12, leads: 3, conversions: 1 },
  { time: "04:00", emails: 8, leads: 2, conversions: 0 },
  { time: "08:00", emails: 45, leads: 12, conversions: 3 },
  { time: "12:00", emails: 67, leads: 18, conversions: 5 },
  { time: "16:00", emails: 52, leads: 15, conversions: 4 },
  { time: "20:00", emails: 38, leads: 9, conversions: 2 },
];

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    // Simulate user check - in real app, this would be from Supabase
    setUser({ email: "demo@clientlio.com" });
  }, []);

  const mockData = {
    totalRevenue: 328000,
    revenueChange: 18.5,
    totalLeads: 1247,
    leadsChange: 12.3,
    conversionRate: 15.2,
    conversionChange: -2.1,
    emailsSent: 8547,
    emailsChange: 24.7,
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <>
      <DashboardNavbar />
      <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                AI-Powered Dashboard
              </h1>
            </div>
            <div className="bg-white/10 backdrop-blur-lg text-sm p-4 px-6 rounded-xl border border-white/20 shadow-2xl flex gap-3 items-center">
              <InfoIcon size="16" className="text-purple-400" />
              <span className="text-gray-200">
                Real-time insights powered by advanced AI analytics and machine learning
              </span>
            </div>
          </header>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Revenue Card */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg border border-blue-500/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium text-white">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardDescription className="text-blue-200">
                  Monthly recurring revenue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold text-white">
                    ${mockData.totalRevenue.toLocaleString()}
                  </div>
                  <div className="flex items-center text-green-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {mockData.revenueChange}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leads Card */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium text-white">
                    New Leads
                  </CardTitle>
                  <Users className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardDescription className="text-purple-200">
                  Generated this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold text-white">
                    {mockData.totalLeads}
                  </div>
                  <div className="flex items-center text-green-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {mockData.leadsChange}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Rate Card */}
            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg border border-green-500/30 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium text-white">
                    Conversion Rate
                  </CardTitle>
                  <Target className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardDescription className="text-green-200">
                  Lead to customer rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold text-white">
                    {mockData.conversionRate}%
                  </div>
                  <div className="flex items-center text-red-400">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {Math.abs(mockData.conversionChange)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emails Sent Card */}
            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg border border-orange-500/30 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium text-white">
                    Emails Sent
                  </CardTitle>
                  <Mail className="h-6 w-6 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardDescription className="text-orange-200">
                  Campaign emails delivered
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-bold text-white">
                    {mockData.emailsSent.toLocaleString()}
                  </div>
                  <div className="flex items-center text-green-400">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      {mockData.emailsChange}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  Revenue & Leads Trend
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Monthly performance overview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis yAxisId="left" stroke="#9CA3AF" />
                    <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                        border: "1px solid rgba(75, 85, 99, 0.3)",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      fill="url(#revenueGradient)"
                      stroke="#3B82F6"
                      strokeWidth={2}
                    />
                    <Bar yAxisId="right" dataKey="leads" fill="#8B5CF6" />
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Lead Sources Pie Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  Lead Sources Distribution
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Where your leads are coming from
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {leadSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                        border: "1px solid rgba(75, 85, 99, 0.3)",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Radial Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-400" />
                  Performance Metrics
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Key performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={performanceData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                        border: "1px solid rgba(75, 85, 99, 0.3)",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 24-Hour Activity */}
            <Card className="lg:col-span-2 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  24-Hour Activity
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Real-time activity throughout the day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                        border: "1px solid rgba(75, 85, 99, 0.3)",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="emails"
                      stackId="1"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stackId="1"
                      stroke="#8B5CF6"
                      fill="#8B5CF6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="conversions"
                      stackId="1"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights Section */}
          <Card className="bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 backdrop-blur-lg border border-purple-500/30 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
                AI-Powered Insights
              </CardTitle>
              <CardDescription className="text-gray-300">
                Machine learning recommendations for your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2">📈 Growth Opportunity</h4>
                  <p className="text-gray-300 text-sm">
                    Your email open rates are 23% above industry average. Consider increasing campaign frequency by 15%.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2">🎯 Optimization Tip</h4>
                  <p className="text-gray-300 text-sm">
                    Social media leads have the highest conversion rate. Allocate 30% more budget to social campaigns.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2">⚡ Action Required</h4>
                  <p className="text-gray-300 text-sm">
                    Peak activity detected at 12:00-16:00. Schedule important campaigns during these hours for maximum impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-gray-300">
                Streamline your workflow with one-click actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium">Generate Report</span>
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">Send Campaign</span>
                </button>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">Import Leads</span>
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Schedule Task</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
