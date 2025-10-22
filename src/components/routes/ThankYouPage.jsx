import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CALL_NUMBER,
  FAQS_PATH,
  SERVICES_PATH,
  OLD_PHONE_NUMBER,
} from "../../utils/constants";
import Button from "../UI/Button";

const ThankYouPage = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Focus the success heading for accessibility
    headingRef.current?.focus();

    // Fire a GTM conversion event (adjust name/params to your setup)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_form_submitted",
      page_type: "thank_you",
      source: "quote_request",
    });
  }, []);

  return (
    <main id="thank-you" className="min-h-screen bg-white font-poppins">
      <Helmet>
        <title>Thank you | Spotless Auto Detailing</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${window.location.origin}/thank-you`} />
      </Helmet>

      {/* Hero */}
      <section
        aria-labelledby="thankyou-title"
        className="w-full bg-black text-white flex items-center justify-center"
      >
      <div className="w-full bg-black h-[250px] md:h-[450px] flex flex-col justify-center items-center mx-auto text-white top-20">
          <h1
            id="thankyou-title"
            ref={headingRef}
            tabIndex={-1}
            className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28"
          >
            Thank you!
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-90">
            We’ve received your request.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="sr-only">What happens next</h2>

        <p className="text-center text-lg md:text-xl">
          Our team will review your details and text you a personalized estimate
          soon. If we need anything else, we’ll reach out.
        </p>

        {/* Next steps */}
        <div className="mt-10 grid gap-6">
          <div className="text-center">
            <p className="text-sm md:text-base">
              Want a faster quote? Text us a couple of photos of your vehicle:
            </p>
            <p className="mt-2">
              <a
                href={CALL_NUMBER}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 px-4 py-2 font-semibold underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-black/30"
              >
                {OLD_PHONE_NUMBER}
              </a>
            </p>
          </div>

          <div className="flex flex-col xxs:flex-row justify-center items-center">
            <div className="mr-2 min-w-32 md:w-60">
              <Link to={SERVICES_PATH} target="_blank">
                <Button
                  children={"Browse Services"}
                  color={"secondary"}
                  border={" border"}
                  width={"w-40 md:w-60"}
                />
              </Link>
            </div>
            <div className="ml-2 min-w-32 md:w-60">
              <Link to={FAQS_PATH} target={"_blank"}>
                <Button
                  children={"Read FAQs"}
                  color={"secondary"}
                  border={" border"}
                  width={"w-40 md:w-60"}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Small print / reassurance */}
        <p className="text-center text-sm text-black/60 mt-10">
          Typical response time: under a couple of hours (8am–8pm).
        </p>
      </section>
    </main>
  );
};

export default ThankYouPage;
