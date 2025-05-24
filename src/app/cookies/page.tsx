import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function CookiesPage() {
  const cookieCategories = [
    {
      name: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
      examples: [
        "Authentication cookies",
        "Security cookies",
        "Load balancing cookies",
      ],
    },
    {
      name: "Performance Cookies",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
      examples: ["Google Analytics", "Hotjar", "New Relic"],
    },
    {
      name: "Functional Cookies",
      description:
        "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
      examples: [
        "Language preference cookies",
        "Region selection cookies",
        "Font size preference cookies",
      ],
    },
    {
      name: "Targeting Cookies",
      description:
        "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.",
      examples: ["Google Ads", "Facebook Pixel", "LinkedIn Insight Tag"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how Clientlio ("we," "us," or "our")
                uses cookies and similar technologies to recognize you when you
                visit our website. It explains what these technologies are and
                why we use them, as well as your rights to control our use of
                them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. What Are Cookies?
              </h2>
              <p>
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Clientlio) are
                called "first-party cookies." Cookies set by parties other than
                the website owner are called "third-party cookies." Third-party
                cookies enable third-party features or functionality to be
                provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Why Do We Use Cookies?
              </h2>
              <p>
                We use first-party and third-party cookies for several reasons.
                Some cookies are required for technical reasons in order for our
                website to operate, and we refer to these as "essential" or
                "strictly necessary" cookies. Other cookies also enable us to
                track and target the interests of our users to enhance the
                experience on our website. Third parties serve cookies through
                our website for advertising, analytics, and other purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                {cookieCategories.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Examples:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {category.examples.map((example, i) => (
                          <li key={i} className="text-gray-600">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. How to Control Cookies
              </h2>
              <p>
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie preferences by clicking on
                the appropriate opt-out links provided in the cookie banner on
                our website.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or
                refuse cookies. If you choose to reject cookies, you may still
                use our website though your access to some functionality and
                areas of our website may be restricted. As the means by which
                you can refuse cookies through your web browser controls vary
                from browser to browser, you should visit your browser's help
                menu for more information.
              </p>
              <p>
                In addition, most advertising networks offer you a way to opt
                out of targeted advertising. If you would like to find out more
                information, please visit{" "}
                <a
                  href="http://www.aboutads.info/choices/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  http://www.aboutads.info/choices/
                </a>{" "}
                or{" "}
                <a
                  href="http://www.youronlinechoices.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  http://www.youronlinechoices.com
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies We Use</h2>
              <p>
                The specific types of first and third-party cookies served
                through our website and the purposes they perform are described
                in the table below:
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left">
                        Cookie Name
                      </th>
                      <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left">
                        Provider
                      </th>
                      <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left">
                        Purpose
                      </th>
                      <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200">
                        _clientlio_session
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Clientlio
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Used to maintain user sessions and authentication state
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Session
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200">
                        _ga
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Google Analytics
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Used to distinguish users
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        2 years
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200">
                        _gid
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Google Analytics
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Used to distinguish users
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        24 hours
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200">
                        _fbp
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Facebook
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Used by Facebook to deliver advertisements
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        3 months
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200">
                        clientlio_preferences
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Clientlio
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        Stores user preferences such as language and theme
                      </td>
                      <td className="py-3 px-4 border-b border-gray-200">
                        1 year
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Changes to This Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal, or regulatory reasons. Please therefore
                revisit this Cookie Policy regularly to stay informed about our
                use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was
                last updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other
                technologies, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> privacy@clientlio.com
                <br />
                <strong>Address:</strong> 123 Market Street, Suite 400, San
                Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
