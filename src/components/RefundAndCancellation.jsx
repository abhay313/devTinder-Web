const RefundAndCancellation = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Refund Policy</h1>
        <p className="text-lg text-gray-500">
          Effective Date: February 7, 2025
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">devtindur.live</span> ("we," "us,"
          or "our"), we want our users to have the best experience when using
          our platform to connect with developers and process payments. This
          Refund Policy outlines the circumstances under which refunds are
          offered and the process for requesting a refund. By using our
          services, you agree to the terms of this Refund Policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Eligibility for Refunds
        </h2>
        <p className="text-gray-600">
          Refunds may be requested in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            The transaction was processed incorrectly due to a technical error
            on our platform.
          </li>
          <li>
            The service provided was not as described or did not meet the
            agreed-upon specifications.
          </li>
          <li>
            You were charged incorrectly or billed for an amount higher than
            agreed upon.
          </li>
        </ul>
        <p className="text-gray-600">
          Refunds will not be issued for the following reasons:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            If you simply change your mind about a service after the payment has
            been processed.
          </li>
          <li>
            If the issue is due to a user’s failure to comply with our{" "}
            <a href="/terms" className="text-blue-500">
              Terms and Conditions
            </a>{" "}
            or{" "}
            <a href="/privacy-policy" className="text-blue-500">
              Privacy Policy
            </a>
            .
          </li>
          <li>
            If a transaction is deemed to have been made fraudulently or without
            proper authorization from the user.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Requesting a Refund
        </h2>
        <p className="text-gray-600">
          To request a refund, please contact our support team at{" "}
          <strong>support@devtindur.live</strong> within{" "}
          <strong>30 days</strong> of the transaction date. Please provide the
          following information to help us process your request:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Your full name and account details.</li>
          <li>
            The transaction reference number and the date of the transaction.
          </li>
          <li>
            A brief description of the issue that led to your refund request.
          </li>
        </ul>
        <p className="text-gray-600">
          We will review your request and notify you of the decision within 5-7
          business days. If your refund request is approved, the refund will be
          processed through the original payment method.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Refund Process</h2>
        <p className="text-gray-600">
          Once a refund request is approved, we will process the refund through
          the original payment method used for the transaction. Depending on
          your payment provider, the refund may take 5-10 business days to
          appear on your account.
        </p>
        <p className="text-gray-600">
          Please note that we do not cover any fees associated with the original
          transaction, such as bank processing fees or currency conversion fees.
          These fees are the responsibility of the user.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Late or Missing Refunds
        </h2>
        <p className="text-gray-600">
          If you have not received your refund after the expected processing
          time, please check your bank account or payment provider first. If the
          issue persists, please contact us at{" "}
          <strong>support@devtindur.live</strong>, and we will assist you in
          tracking your refund.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Changes to This Refund Policy
        </h2>
        <p className="text-gray-600">
          We may update this Refund Policy from time to time. If we make
          changes, we will update the "Effective Date" at the top of this page
          and notify users as necessary. We encourage you to review this policy
          periodically to stay informed about our refund procedures.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Refund Policy or need
          assistance with a refund request, please contact us at:
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> support@devtindur.live
        </p>
      </section>
    </div>
  );
};

export default RefundAndCancellation;
