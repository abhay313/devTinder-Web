const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-500">
          Effective Date: February 7, 2025
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">devtindur.live</span> ("we," "us,"
          or "our"), we value your privacy and are committed to safeguarding
          your personal information. This Privacy Policy explains how we
          collect, use, and protect your personal data when you visit our
          website or engage with our services. By using our platform, you agree
          to the terms outlined in this policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Information We Collect
        </h2>
        <p className="text-gray-600">
          We collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, payment details, and any other information you provide while
            creating an account or engaging with the platform.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            our website, including IP address, browser type, and device type.
          </li>
          <li>
            <strong>Payment Information:</strong> For transactions, we collect
            necessary payment details, which are processed through a third-party
            payment gateway. We do not store full payment information.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          How We Use Your Information
        </h2>
        <p className="text-gray-600">
          We use your data for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            To provide and maintain our services, including connecting
            developers and handling payments.
          </li>
          <li>
            To personalize your experience on devtindur.live and tailor content
            and features to your needs.
          </li>
          <li>
            To process payments securely through our third-party gateway and
            notify you about your transaction status.
          </li>
          <li>
            To improve the functionality of our platform by analyzing usage
            data.
          </li>
          <li>
            To comply with legal obligations and protect the rights of users.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Payment Gateway Integration
        </h2>
        <p className="text-gray-600">
          Payments are processed through{" "}
          <strong>[Payment Gateway Provider Name]</strong> (e.g., Stripe,
          PayPal). We do not store your full payment information, such as credit
          card numbers. For more details, please refer to the privacy policy of
          our payment provider.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Data Security</h2>
        <p className="text-gray-600">
          We implement reasonable security measures to protect your personal
          information. While we use encryption and secure servers, no method of
          transmission over the internet can guarantee 100% security. Your data
          s safety is important to us, and we strive to protect it as best as
          possible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-600">
          We use cookies and similar tracking technologies to improve your
          experience on our site. Cookies help us remember your preferences and
          provide a personalized user experience. You may adjust your browser
          settings to reject cookies, but this may impact some site
          functionality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Sharing Your Information
        </h2>
        <p className="text-gray-600">
          We do not sell your information to third parties. However, we may
          share your information in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>With Service Providers:</strong> We may share your
            information with trusted third parties that help us provide services
            (e.g., hosting, payment processing, analytics).
          </li>
          <li>
            <strong>For Legal Compliance:</strong> We may disclose your
            information if required by law or to protect our legal rights.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            with third parties if you have given explicit consent to do so.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your Data Rights
        </h2>
        <p className="text-gray-600">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Update or correct any inaccurate
            information.
          </li>
          <li>
            <strong>Deletion:</strong> Request that we delete your personal
            information, subject to certain legal limitations.
          </li>
          <li>
            <strong>Opt-Out:</strong> Opt-out of receiving marketing
            communications by following the unsubscribe instructions in our
            emails.
          </li>
        </ul>
        <p className="text-gray-600">
          To exercise these rights, please contact us at{" "}
          <strong>support@devtindur.live</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy periodically. When changes are made,
          the effective date will be updated. We encourage you to review this
          page regularly to stay informed about how we protect your data.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy,
          please reach out to us at:
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> support@devtindur.live
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
