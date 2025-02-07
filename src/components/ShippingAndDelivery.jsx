const ShippingAndDelivery = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Shipping and Delivery Policy
        </h1>
        <p className="text-lg text-gray-500">
          Effective Date: February 7, 2025
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">devtindur.live</span> ("we," "us,"
          or "our"), we strive to provide fast and reliable delivery for any
          digital or physical products purchased through our platform. This
          Shipping and Delivery Policy outlines our shipping practices,
          estimated delivery times, and conditions. By using our services, you
          agree to the terms of this policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Shipping Methods and Charges
        </h2>
        <p className="text-gray-600">
          We offer various shipping options for digital and physical products
          purchased on our platform. Shipping charges will be calculated during
          checkout based on the delivery address, product type, and shipping
          method selected.
        </p>
        <p className="text-gray-600">
          For digital products, no shipping fee applies, as they will be
          delivered electronically through your account or email.
        </p>
        <p className="text-gray-600">
          For physical products, shipping charges will depend on the size,
          weight, and delivery location of the items. You will be provided with
          a list of available shipping options and their corresponding charges
          before completing your purchase.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Estimated Delivery Times
        </h2>
        <p className="text-gray-600">
          Estimated delivery times for physical products are as follows:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Standard Shipping:</strong> 5-7 business days
          </li>
          <li>
            <strong>Express Shipping:</strong> 2-3 business days
          </li>
          <li>
            <strong>Overnight Shipping:</strong> 1 business day (available in
            select locations)
          </li>
        </ul>
        <p className="text-gray-600">
          Please note that delivery times may vary based on factors such as
          product availability, shipping destination, and unforeseen
          circumstances such as weather or holidays.
        </p>
        <p className="text-gray-600">
          For digital products, delivery will be immediate, or within a few
          minutes of completing your purchase, depending on the type of product.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Shipping Restrictions
        </h2>
        <p className="text-gray-600">
          Currently, we ship to most regions worldwide. However, certain
          geographical areas may have restrictions or limitations on delivery,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            International shipping may be subject to customs duties and taxes.
          </li>
          <li>
            Some remote or rural locations may experience longer delivery times
            or may not be eligible for express services.
          </li>
        </ul>
        <p className="text-gray-600">
          If we are unable to deliver to your location, we will notify you
          during checkout, and you will have the option to choose another
          shipping address or cancel the order.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Order Processing and Handling
        </h2>
        <p className="text-gray-600">
          All orders are processed Monday through Friday, excluding public
          holidays. Orders placed on weekends or holidays will be processed the
          following business day.
        </p>
        <p className="text-gray-600">
          After your order is processed, you will receive an email confirmation
          with the shipping details, including the tracking number (if
          applicable). You can track the progress of your shipment through the
          carrier’s website.
        </p>
        <p className="text-gray-600">
          For digital products, once your order is processed, you will be able
          to access your product immediately or receive a download link via
          email.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Delivery Issues
        </h2>
        <p className="text-gray-600">
          While we work hard to ensure timely and accurate deliveries, there may
          be occasions when your package experiences delays, damages, or issues.
          If this happens, please contact us at{" "}
          <strong>support@devtindur.live</strong>, and we will assist you in
          resolving the issue.
        </p>
        <p className="text-gray-600">
          If your package is lost, stolen, or damaged during transit, we will
          work with the carrier to initiate an investigation and may issue a
          replacement or refund if applicable.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Tracking Your Order
        </h2>
        <p className="text-gray-600">
          Once your order has been processed and shipped, you will receive an
          email with a tracking number and a link to the carrier's website. This
          allows you to track the status of your delivery in real-time.
        </p>
        <p className="text-gray-600">
          Please note that tracking information may take up to 24 hours to
          become available after shipment.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Changes to This Shipping Policy
        </h2>
        <p className="text-gray-600">
          We may update this Shipping and Delivery Policy from time to time. If
          we make changes, we will update the "Effective Date" at the top of
          this page and notify users as necessary. We encourage you to review
          this policy periodically to stay informed about our shipping and
          delivery practices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns regarding our Shipping and
          Delivery Policy or need assistance with a delivery issue, please
          contact us at:
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> support@devtindur.live
        </p>
      </section>
    </div>
  );
};

export default ShippingAndDelivery;
