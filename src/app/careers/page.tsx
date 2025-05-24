import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Available)",
      type: "Full-time",
      description:
        "We're looking for an experienced ML engineer to help develop and improve our AI models for lead generation and analytics.",
    },
    {
      title: "Product Manager, Chatbots",
      department: "Product",
      location: "New York, NY (Remote Available)",
      type: "Full-time",
      description:
        "Join our product team to shape the future of our AI chatbot platform, working closely with engineering and design.",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Help build intuitive interfaces for our AI tools using React, Next.js, and modern frontend technologies.",
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Austin, TX (Remote Available)",
      type: "Full-time",
      description:
        "Support our clients in implementing and getting the most value from our AI services.",
    },
    {
      title: "AI Research Intern",
      department: "Research",
      location: "Remote",
      type: "Internship (Summer 2023)",
      description:
        "Work with our research team to explore cutting-edge AI applications for business use cases.",
    },
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements (remote, hybrid, or in-office)",
    "Unlimited PTO policy",
    "Professional development budget",
    "Home office stipend",
    "Regular team retreats and events",
    "Parental leave",
    "401(k) matching",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Help us build the future of AI for businesses around the world
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Work at Clientlio
              </h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  At Clientlio, we're building AI tools that help businesses of
                  all sizes grow and succeed. Our team is passionate about
                  making advanced technology accessible and easy to use for
                  everyone.
                </p>
                <p>
                  We believe in a collaborative, inclusive work environment
                  where everyone's ideas are valued. We're a remote-first
                  company with team members across the globe, united by our
                  mission to democratize AI.
                </p>
                <p>
                  If you're excited about AI, love solving complex problems, and
                  want to make a real impact on thousands of businesses, we'd
                  love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Benefits & Perks
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Open Positions
            </h2>
            <div className="max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {position.title}
                    </h3>
                    <div className="text-blue-600 mb-3">
                      {position.department}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Send us your resume and let us know how you can contribute to our
              mission.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Submit Your Resume
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
