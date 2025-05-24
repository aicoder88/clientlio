import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Bot,
  LineChart,
  Shield,
  Users,
  Zap,
  MessageSquare,
  BrainCircuit,
} from "lucide-react";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* AI Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of AI tools helps you generate leads,
              analyze data, automate workflows, and delight your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Lead Generation",
                description:
                  "AI-powered lead generation that finds your ideal customers",
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Smart Analytics",
                description: "Actionable insights from your business data",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "AI Chatbots",
                description: "24/7 customer service with intelligent chatbots",
              },
              {
                icon: <BrainCircuit className="w-6 h-6" />,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and focus on growth",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Command Center</h2>
              <p className="text-gray-600 mb-6">
                Manage all your AI services from one intuitive dashboard. Track
                leads, analyze performance, configure chatbots, and automate
                workflows—all in one place.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    text: "Unified dashboard for all AI services",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    text: "Comprehensive client management",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    text: "Enterprise-grade security",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="h-8 w-32 bg-blue-600 rounded-md mb-4"></div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                  </div>
                  <div className="h-40 bg-white rounded-lg shadow-sm mb-4"></div>
                  <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Increase in Lead Conversion</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100">Business Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Clientlio's AI services
            to grow faster and serve clients better.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Access Your Dashboard
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
