import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Calendar, Download, ExternalLink } from "lucide-react";

export default function PressPage() {
  const pressReleases = [
    {
      title:
        "Clientlio Raises $12M Series A to Democratize AI for Small Businesses",
      date: "April 15, 2023",
      excerpt:
        "Funding will accelerate product development and expand market reach for AI-powered business tools.",
      link: "#",
    },
    {
      title: "Clientlio Launches New AI Analytics Platform for SMBs",
      date: "February 8, 2023",
      excerpt:
        "New platform brings enterprise-grade analytics capabilities to small and medium-sized businesses.",
      link: "#",
    },
    {
      title: "Clientlio Reaches Milestone of 1,000 Business Customers",
      date: "December 12, 2022",
      excerpt:
        "AI services platform celebrates rapid growth and customer success stories across industries.",
      link: "#",
    },
    {
      title: "Clientlio Named to AI Business Solutions Watchlist 2022",
      date: "October 5, 2022",
      excerpt:
        "Industry recognition highlights Clientlio's innovative approach to business AI applications.",
      link: "#",
    },
  ];

  const mediaFeatures = [
    {
      publication: "TechCrunch",
      title: "How Clientlio is Making AI Accessible to Small Businesses",
      date: "March 20, 2023",
      link: "#",
    },
    {
      publication: "Forbes",
      title: "The AI Startups Transforming Business Operations in 2023",
      date: "February 15, 2023",
      link: "#",
    },
    {
      publication: "Business Insider",
      title: "Meet the Company Bringing Enterprise AI to the Masses",
      date: "January 10, 2023",
      link: "#",
    },
    {
      publication: "VentureBeat",
      title: "Clientlio's Approach to Democratizing AI for Business Use",
      date: "November 28, 2022",
      link: "#",
    },
  ];

  const brandAssets = [
    {
      name: "Clientlio Logo Pack",
      description:
        "Full logo suite including primary, secondary, and monochrome versions in various formats.",
      fileType: "ZIP (12MB)",
    },
    {
      name: "Brand Guidelines",
      description:
        "Comprehensive guide to Clientlio's visual identity, including color palette, typography, and usage rules.",
      fileType: "PDF (8MB)",
    },
    {
      name: "Product Screenshots",
      description:
        "High-resolution images of Clientlio's dashboard and key features.",
      fileType: "ZIP (25MB)",
    },
    {
      name: "Executive Headshots",
      description: "Professional photos of Clientlio's leadership team.",
      fileType: "ZIP (15MB)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest news, press releases, and resources for media coverage
          </p>
        </div>

        {/* Press Contact Section */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>
          <p className="text-gray-600 mb-6">
            For press inquiries, interview requests, or additional information,
            please contact:
          </p>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="font-medium">Media Relations</h3>
              <p className="text-gray-600">press@clientlio.com</p>
            </div>
            <div>
              <h3 className="font-medium">Jessica Martinez</h3>
              <p className="text-gray-600">Head of Communications</p>
              <p className="text-gray-600">jessica@clientlio.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{release.date}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <a
                  href={release.link}
                  className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                >
                  Read Full Release
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Media Coverage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-blue-600 font-medium mb-2">
                  {feature.publication}
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{feature.date}</span>
                </div>
                <a
                  href={feature.link}
                  className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                >
                  Read Article
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Assets Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Brand Assets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {brandAssets.map((asset, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">{asset.name}</h3>
                <p className="text-gray-600 mb-2">{asset.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{asset.fileType}</span>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
                    Download
                    <Download className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
