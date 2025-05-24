import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Features</h1>

        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Lead Generation</h2>
            <p className="text-gray-600 mb-4">
              Our AI-powered lead generation system identifies and qualifies
              potential customers based on your ideal customer profile. It
              analyzes online behavior, engagement patterns, and demographic
              data to deliver high-quality leads that are more likely to
              convert.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automated lead scoring and qualification</li>
                <li>Personalized outreach recommendations</li>
                <li>Integration with your existing CRM</li>
                <li>Detailed analytics on lead sources and conversion rates</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600 mb-4">
              Transform raw data into actionable insights with our advanced
              analytics platform. Our AI analyzes patterns across your business
              data to identify opportunities, predict trends, and recommend
              optimizations for better performance.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time performance dashboards</li>
                <li>Predictive analytics and forecasting</li>
                <li>Custom report generation</li>
                <li>Anomaly detection and alerts</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Chatbots</h2>
            <p className="text-gray-600 mb-4">
              Provide 24/7 customer support with our intelligent chatbots. They
              can answer questions, qualify leads, schedule appointments, and
              escalate complex issues to your team when necessary.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Natural language processing for human-like conversations
                </li>
                <li>
                  Easy integration with your website and messaging platforms
                </li>
                <li>Customizable responses and workflows</li>
                <li>Continuous learning from interactions</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Automation</h2>
            <p className="text-gray-600 mb-4">
              Streamline your operations with intelligent workflow automation.
              Eliminate repetitive tasks, reduce errors, and free up your team
              to focus on high-value activities that drive growth.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Visual workflow builder (no coding required)</li>
                <li>Triggers based on time, events, or conditions</li>
                <li>Integration with popular business tools</li>
                <li>Performance tracking and optimization</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
