import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Clientlio ("Company," "we," "us," or
                "our") governing your access to and use of the website and AI
                services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by
                these Terms. If you disagree with any part of the Terms, you may
                not access the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Services Description
              </h2>
              <p>
                Clientlio provides AI-powered services for businesses, including
                lead generation, analytics, chatbots, and workflow automation.
                Our Services are designed to help businesses grow and operate
                more efficiently through the use of artificial intelligence
                technology.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate,
                complete, and current information. Failure to do so constitutes
                a breach of the Terms, which may result in immediate termination
                of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use
                to access the Services and for any activities or actions under
                your password. You agree not to disclose your password to any
                third party. You must notify us immediately upon becoming aware
                of any breach of security or unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Subscription and Payment
              </h2>
              <p>
                Some of our Services are offered on a subscription basis. You
                agree to pay the fees for the subscription plan you choose. We
                may change our fees at any time by posting the changes on the
                Services or by notifying you directly.
              </p>
              <p>
                Unless otherwise stated, all fees are quoted in U.S. Dollars.
                You are responsible for paying all fees and applicable taxes in
                a timely manner with a valid payment method. If your payment
                method fails or your account is past due, we may collect fees
                using other collection mechanisms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property
              </h2>
              <p>
                The Services and their original content, features, and
                functionality are and will remain the exclusive property of
                Clientlio and its licensors. The Services are protected by
                copyright, trademark, and other laws of both the United States
                and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent of
                Clientlio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              <p>
                Our Services allow you to input, upload, or otherwise provide
                content ("User Content"). You retain all rights in, and are
                solely responsible for, the User Content you provide to the
                Services.
              </p>
              <p>
                By providing User Content to the Services, you grant us a
                worldwide, non-exclusive, royalty-free license to use,
                reproduce, modify, adapt, publish, translate, and distribute
                your User Content in connection with providing and improving our
                Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Prohibited Uses
              </h2>
              <p>
                You may use our Services only for lawful purposes and in
                accordance with these Terms. You agree not to use the Services:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  In any way that violates any applicable federal, state, local,
                  or international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any "junk mail," "chain
                  letter," "spam," or any other similar solicitation
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a
                  Company employee, another user, or any other person or entity
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone's use or enjoyment of the Services, or which may harm
                  the Company or users of the Services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                In no event shall Clientlio, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will
                immediately cease. If you wish to terminate your account, you
                may simply discontinue using the Services or contact us to
                request account deletion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> legal@clientlio.com
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
