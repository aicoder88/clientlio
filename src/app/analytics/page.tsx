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
  TrendingUp,
  TrendingDown,
  Users,
  Mail,
  MousePointer,
  Eye,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  DollarSign,
  Activity,
} from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Mock analytics data
  const metrics = {
    totalVisitors: 12847,
    visitorsChange: 18.2,
    pageViews: 45632,
    pageViewsChange: 12.5,
    conversionRate: 3.8,
    conversionChange: -0.3,
    avgSessionDuration: "4:32",
    durationChange: 8.7,
    bounceRate: 42.1,
    bounceChange: -5.2,
    revenue: 89420,
    revenueChange: 24.8,
  };

  const trafficSources = [
    { name: "Organic Search", visitors: 5420, percentage: 42.2, change: 15.3 },
    { name: "Direct", visitors: 3210, percentage: 25.0, change: 8.7 },
    { name: "Social Media", visitors: 2180, percentage: 17.0, change: -2.1 },
    { name: "Paid Search", visitors: 1340, percentage: 10.4, change: 22.5 },
    { name: "Referrals", visitors: 697, percentage: 5.4, change: 12.8 },
  ];

  const topPages = [
    { page: "/", views: 8420, uniqueViews: 6210, avgTime: "3:45", bounceRate: 35.2 },
    { page: "/features", views: 5680, uniqueViews: 4320, avgTime: "5:12", bounceRate: 28.7 },
    { page: "/pricing", views: 4210, uniqueViews: 3890, avgTime: "4:33", bounceRate: 22.1 },
    { page: "/blog", views: 3450, uniqueViews: 2980, avgTime: "6:21", bounceRate: 31.5 },
    { page: "/contact", views: 2180, uniqueViews: 1950, avgTime: "2:18", bounceRate: 45.8 },
  ];

  const conversionFunnel = [
    { stage: "Visitors", count: 12847, percentage: 100, dropOff: 0 },
    { stage: "Page Views", count: 8420, percentage: 65.5, dropOff: 34.5 },
    { stage: "Engaged Users", count: 3210, percentage: 25.0, dropOff: 40.5 },
    { stage: "Lead Signups", count: 890, percentage: 6.9, dropOff: 18.1 },
    { stage: "Conversions", count: 487, percentage: 3.8, dropOff: 3.1 },
  ];

  const campaignPerformance = [
    { name: "Summer Sale 2024", clicks: 2340, impressions: 45600, ctr: 5.13, cost: 1240, conversions: 89 },
    { name: "AI Features Launch", clicks: 1890, impressions: 38200, ctr: 4.95, cost: 980, conversions: 67 },
    { name: "Lead Gen Campaign", clicks: 1560, impressions: 29800, ctr: 5.23, cost: 780, conversions: 45 },
    { name: "Retargeting Q1", clicks: 1120, impressions: 18900, ctr: 5.93, cost: 560, conversions: 34 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
          <p className="text-gray-600 max-w-2xl">
            Transform raw data into actionable insights. Monitor your business performance, 
            track user behavior, and optimize your marketing campaigns with AI-powered analytics.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Demo Mode - Sign Up for Real Analytics
                </h3>
                <p className="text-blue-700">
                  This is a preview of our analytics dashboard. Sign up to track your actual business metrics and performance.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Tracking
                </a>
                <a
                  href="/features"
                  className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <select 
              className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                !user ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={!user}
            >
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
              <option>Custom range</option>
            </select>
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
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
                user 
                  ? "border-gray-300 hover:bg-gray-50" 
                  : "border-gray-200 text-gray-400 cursor-not-allowed"
              } transition-colors`}
              disabled={!user}
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
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
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.totalVisitors.toLocaleString()}</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +{metrics.visitorsChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Page Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.pageViews.toLocaleString()}</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +{metrics.pageViewsChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.conversionRate}%</div>
              <div className="flex items-center text-red-600 text-sm">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                {metrics.conversionChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Avg Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.avgSessionDuration}</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +{metrics.durationChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Bounce Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.bounceRate}%</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                {metrics.bounceChange}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${metrics.revenue.toLocaleString()}</div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +{metrics.revenueChange}%
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{source.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{source.visitors.toLocaleString()}</span>
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
                            index === 2 ? "bg-purple-500" : 
                            index === 3 ? "bg-pink-500" : "bg-green-500"
                          }`}
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-10">{source.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>User journey through your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversionFunnel.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{stage.stage}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{stage.count.toLocaleString()}</span>
                        <span className="text-xs text-gray-500">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-8 bg-gray-200 rounded-lg overflow-hidden">
                        <div
                          className={`h-full ${
                            index === 0 ? "bg-blue-600" :
                            index === 1 ? "bg-blue-500" :
                            index === 2 ? "bg-blue-400" :
                            index === 3 ? "bg-blue-300" : "bg-blue-200"
                          }`}
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                      {index > 0 && (
                        <div className="absolute right-2 top-1 text-xs text-red-600 font-medium">
                          -{stage.dropOff}%
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages on your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-blue-600">{page.page}</span>
                      <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Unique:</span> {page.uniqueViews.toLocaleString()}
                      </div>
                      <div>
                        <span className="text-gray-500">Avg Time:</span> {page.avgTime}
                      </div>
                      <div>
                        <span className="text-gray-500">Bounce:</span> {page.bounceRate}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Campaign Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Your marketing campaign results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium">{campaign.name}</h4>
                      <span className="text-sm text-green-600 font-medium">
                        {campaign.conversions} conversions
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Clicks:</span> {campaign.clicks.toLocaleString()}
                      </div>
                      <div>
                        <span className="text-gray-500">CTR:</span> {campaign.ctr}%
                      </div>
                      <div>
                        <span className="text-gray-500">Impressions:</span> {campaign.impressions.toLocaleString()}
                      </div>
                      <div>
                        <span className="text-gray-500">Cost:</span> ${campaign.cost}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}