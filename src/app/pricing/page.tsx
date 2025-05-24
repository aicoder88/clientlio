import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses just getting started with AI.",
      features: [
        "Lead Generation (100 leads/mo)",
        "Basic Analytics Dashboard",
        "1 Chatbot Configuration",
        "5 Automation Workflows",
        "Email Support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description:
        "Ideal for growing businesses looking to scale their AI capabilities.",
      features: [
        "Lead Generation (500 leads/mo)",
        "Advanced Analytics & Reporting",
        "3 Chatbot Configurations",
        "15 Automation Workflows",
        "Client Management Portal",
        "Priority Support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For established businesses with advanced AI needs.",
      features: [
        "Lead Generation (Unlimited)",
        "Custom Analytics Solutions",
        "Unlimited Chatbot Configurations",
        "Unlimited Automation Workflows",
        "Advanced Client Management",
        "API Access",
        "Dedicated Account Manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include
            access to our core AI services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border ${plan.highlighted ? "border-blue-500 shadow-lg" : "border-gray-200"}`}
            >
              <div
                className={`p-6 ${plan.highlighted ? "bg-blue-50" : "bg-white"}`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium ${plan.highlighted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"} transition-colors`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <p className="font-medium mb-4">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need a custom solution?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We offer tailored AI solutions for businesses with specific
            requirements. Contact our sales team to discuss your needs.
          </p>
          <button className="py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
            Contact Sales
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
