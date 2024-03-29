import React from "react";

const page = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Privacy Policy
            </h1>
          </header>
          <br />
          <span className="font-bold dark:text-slate-100">
            Information Collection and Use:
          </span>{" "}
          <br />
          <p className="dark:text-slate-100">Describe the types of personal information you collect (e.g., name,
          email address) and how you collect it (e.g., through contact forms,
          newsletter subscription).State the purpose of collecting this
          information and how you will use it (e.g., to respond to inquiries,
          provide requested services, improve website content).</p><br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Cookies and Tracking Technologies:</span>
          <br></br>
          <p className="dark:text-slate-100">Explain the use of cookies and other tracking technologies on your
          website.Mention the types of cookies you use (e.g., session cookies,
          analytics cookies) and their purpose.Provide information on how users
          can manage or disable cookies through their web browser settings.</p>
          <br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Data Sharing:</span>
          <br></br>
          <p className="dark:text-slate-100">Clarify that you will not sell, exchange, or share users&apos; personal
          information with third parties without their consent, except as
          required by law.If you do share data with third parties (e.g.,
          analytics tools, advertising networks), explain the purpose and
          provide links to their respective privacy policies.</p><br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Data Security:</span>
          <br></br>
          <p className="dark:text-slate-100">Explain the security measures you have in place to protect user&apos;s
          personal information from unauthorized access, alteration, disclosure,
          or destruction.State that while you take reasonable precautions, no
          method of data transmission over the internet or electronic storage is
          100% secure.</p><br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Third-Party Websites:</span>
          <br></br>
          <p className="dark:text-slate-100">Mention that your website may contain links to external
          websites.Clarify that once users leave your website, you are not
          responsible for the privacy practices or content of those third-party
          websites.Encourage users to review the privacy policies of those
          websites before providing any personal information.</p><br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Children&apos;s Privacy:</span>
          <br></br>
          <p className="dark:text-slate-100">State that your website is not intended for children under the age of
          13.Declare that you do not knowingly collect or store personal
          information from children.</p><br></br>
          <br />
          <span className="font-bold dark:text-slate-100">Changes to the Privacy Policy:</span>
          <br></br>
          <p className="dark:text-slate-100">State that the Privacy Policy may be updated periodically.Explain that
          any changes will be posted on the website with the effective
          date.Encourage users to review the Privacy Policy regularly to stay
          informed about how their information is being handled.</p><br></br>
        </article>
      </div>
    </main>
  );
};

export default page;
