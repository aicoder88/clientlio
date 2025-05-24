import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Shield, Lock, Server, FileCheck } from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Encryption",
      description:
        "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Access Controls",
      description:
        "Role-based access controls ensure that only authorized personnel can access sensitive information.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Secure Infrastructure",
      description:
        "Our infrastructure is hosted in SOC 2 compliant data centers with 24/7 monitoring and security.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Regular Audits",
      description:
        "We conduct regular security audits and penetration testing to identify and address vulnerabilities.",
    },
  ];

  const securityPractices = [
    {
      title: "Employee Security Training",
      description:
        "All employees undergo comprehensive security training and follow strict security protocols.",
    },
    {
      title: "Vendor Assessment",
      description:
        "We carefully evaluate the security practices of all third-party vendors before integration.",
    },
    {
      title: "Incident Response Plan",
      description:
        "We maintain a robust incident response plan to quickly address any security incidents.",
    },
    {
      title: "Data Minimization",
      description:
        "We collect only the data necessary to provide our services and delete it when no longer needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security at Clientlio
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We take the security and privacy of your data seriously. Learn
              about our comprehensive approach to protecting your information.
            </p>
          </div>
        </section>

        {/* Security Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our Security Commitment
              </h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  At Clientlio, security isn't just a feature—it's foundational
                  to everything we do. As an AI services provider handling
                  sensitive business data, we understand the critical importance
                  of maintaining robust security measures to protect your
                  information.
                </p>
                <p>
                  Our security program is built on industry best practices and
                  designed to ensure the confidentiality, integrity, and
                  availability of your data. We continuously monitor, test, and
                  improve our security controls to stay ahead of emerging
                  threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Security Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Compliance
              </h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  We adhere to industry standards and regulations to ensure the
                  highest level of security for our customers. Our compliance
                  efforts include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>GDPR Compliance:</strong> We follow GDPR principles
                    for data protection and privacy.
                  </li>
                  <li>
                    <strong>SOC 2 Type II:</strong> Our systems and processes
                    are audited against SOC 2 standards.
                  </li>
                  <li>
                    <strong>CCPA Compliance:</strong> We respect California
                    Consumer Privacy Act requirements.
                  </li>
                  <li>
                    <strong>ISO 27001:</strong> We follow ISO 27001 information
                    security management practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Practices Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Security Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {securityPractices.map((practice, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Security FAQ
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    How is my data protected?
                  </h3>
                  <p className="text-gray-600">
                    Your data is encrypted both in transit and at rest using
                    industry-standard encryption protocols. We implement strict
                    access controls and regularly audit our systems to ensure
                    data security.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Who can access my data?
                  </h3>
                  <p className="text-gray-600">
                    Access to customer data is strictly limited to authorized
                    personnel who require it to provide support or maintain the
                    service. All access is logged and monitored.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    What happens if there's a security incident?
                  </h3>
                  <p className="text-gray-600">
                    We have a comprehensive incident response plan in place. In
                    the event of a security incident, we will promptly notify
                    affected customers, take steps to contain and mitigate the
                    impact, and provide regular updates until the issue is
                    resolved.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    How can I report a security concern?
                  </h3>
                  <p className="text-gray-600">
                    If you discover a potential security vulnerability or have a
                    security concern, please contact our security team
                    immediately at security@clientlio.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Have Security Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our security team is available to address any questions or
              concerns you may have about how we protect your data.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Security Team
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
