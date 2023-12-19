import React from "react";

const page = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Terms and Conditions
            </h1>
          </header>
          <br />
          <span className="font-bold dark:text-slate-100">
            Acceptance of Terms:{" "}
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">State that by accessing and using the website, users agree to be bound
          by the Terms & Conditions. <br />
          Clarify that if users do not agree with any part of these terms, they
          should refrain from using the website.</p> <br />
          <br />
          <span className="font-bold dark:text-slate-100">
            Intellectual Property:{" "}
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">State that all content on the website (text, graphics, logos, images,
          software) is the property of Lakshya Roonwal and protected by
          intellectual property laws. <br />
          Prohibit users from using, modifying, or distributing any content
          without prior written permission. </p><br />
          <br />
          <span className="font-bold dark:text-slate-100">
            User Conduct:{" "}
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">Specify that users must use the website only for lawful purposes and
          in a manner that does not infringe upon the rights of others or
          restrict their use of the <br />
          website. Make users solely responsible for any content they post on
          the website.</p> <br />
          <br />
          <span className="font-bold dark:text-slate-100">
            Disclaimer:{" "}
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">State that the website and its content are provided on an &quot;as
          is&quot; basis without any warranties, expressed or implied. <br />
          Clarify that Lakshya Roonwal does not guarantee the accuracy,
          reliability, or completeness of the information on the website.</p> <br />
          <br />
          <span className="font-bold dark:text-slate-100">
            Limitation of Liability:{" "}
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">Clarify that Lakshya Roonwal and its affiliates will not be liable for
          any direct, indirect, incidental, consequential, or exemplary damages
          arising from the use of the website.</p> <br />
          <br />
          <span className="font-bold dark:text-slate-100">
            Links to Third-Party Websites:{" "}
          </span>{" "}
          <br />
          Mention that the website may contain links to external websites.{" "}
          <br />
          <p className="dark:text-slate-100">Clarify that Lakshya Roonwal is not responsible for the content or
          availability of these third-party websites and does not endorse or
          guarantee their services.</p> <br />
        </article>
      </div>
    </main>
  );
};

export default page;
