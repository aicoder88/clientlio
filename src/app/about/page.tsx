import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Award, Users, Globe, Rocket } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Former AI research lead with 15+ years of experience in machine learning and business applications.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      bio: "Machine learning expert with a background in developing enterprise AI solutions for Fortune 500 companies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      bio: "Product strategist focused on creating intuitive user experiences for complex AI tools.",
    },
    {
      name: "David Wilson",
      role: "Lead Data Scientist",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      bio: "PhD in Computer Science specializing in natural language processing and predictive analytics.",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Success",
      description:
        "We measure our success by the success of our clients. Their growth is our priority.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We're committed to delivering the highest quality AI solutions that exceed expectations.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Accessibility",
      description:
        "We make advanced AI technology accessible to businesses of all sizes.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We continuously push boundaries to develop cutting-edge AI solutions.",
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
              About Clientlio
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to democratize AI for businesses of all sizes,
              making powerful technology accessible, affordable, and easy to
              use.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Founded in 2020, Clientlio began with a simple observation:
                  while large enterprises were leveraging AI to transform their
                  businesses, smaller companies were being left behind. The
                  technology was too complex, too expensive, and required
                  specialized expertise that most businesses couldn't afford.
                </p>
                <p>
                  Our founder, Sarah Johnson, previously led AI research at a
                  major tech company where she witnessed firsthand the
                  transformative power of artificial intelligence. She assembled
                  a team of experts with a shared vision: to create AI tools
                  that any business could use, regardless of their technical
                  expertise or budget constraints.
                </p>
                <p>
                  Today, Clientlio serves over 1,000 businesses worldwide, from
                  solo entrepreneurs to mid-sized companies, all using our AI
                  services to generate leads, analyze data, automate workflows,
                  and delight their clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden text-center"
                >
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-32 w-32 rounded-full border-4 border-white"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 mb-3">{member.role}</div>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
