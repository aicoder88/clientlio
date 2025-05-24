import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Calendar, Clock, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How AI is Revolutionizing Lead Generation",
      excerpt:
        "Discover how artificial intelligence is transforming the way businesses find and qualify potential customers.",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      author: "Sarah Johnson",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Lead Generation",
    },
    {
      title: "5 Ways to Leverage Analytics for Business Growth",
      excerpt:
        "Learn how to use data-driven insights to make better decisions and accelerate your business growth.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Michael Chen",
      date: "June 2, 2023",
      readTime: "7 min read",
      category: "Analytics",
    },
    {
      title: "Building Effective Chatbots: Best Practices",
      excerpt:
        "Explore the key principles for creating chatbots that deliver excellent customer experiences.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      author: "Emily Rodriguez",
      date: "June 18, 2023",
      readTime: "6 min read",
      category: "Chatbots",
    },
    {
      title: "Workflow Automation: From Basics to Advanced Strategies",
      excerpt:
        "A comprehensive guide to implementing workflow automation in your business operations.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      author: "David Wilson",
      date: "July 5, 2023",
      readTime: "8 min read",
      category: "Automation",
    },
    {
      title: "The Future of AI in Business: Trends to Watch",
      excerpt:
        "Stay ahead of the curve with these emerging trends in artificial intelligence for business.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      author: "Alex Thompson",
      date: "July 22, 2023",
      readTime: "4 min read",
      category: "AI Trends",
    },
    {
      title: "Client Management: Building Lasting Relationships",
      excerpt:
        "Strategies for using technology to strengthen client relationships and increase retention.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      author: "Jessica Lee",
      date: "August 10, 2023",
      readTime: "6 min read",
      category: "Client Management",
    },
  ];

  const categories = [
    "All",
    "Lead Generation",
    "Analytics",
    "Chatbots",
    "Automation",
    "AI Trends",
    "Client Management",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Clientlio Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and strategies to help you leverage AI for business
            growth
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-blue-600">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
