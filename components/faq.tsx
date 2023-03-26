import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Back
            </Link>
          </div>

          <div className="mt-12 space-y-8">
            <details className="border-2 border-gray-100 rounded-lg dark:border-gray-700 group rounded-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How should I use Job Esay?
                </h1>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="p-8 leading-relaxed text-gray-500 dark:text-gray-300">
                Paste a detailed job description into the input box and click
                the Generate button to generate resuem or cover letter.
                <br />
                Support for different languages, such as English, Chinese,
                Japanese, Korean, etc. 🚀🚀🚀
                <br />
              </p>
            </details>

            <details className="border-2 border-gray-100 rounded-lg dark:border-gray-700 group rounded-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Is this service free?
                </h1>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="p-8 leading-relaxed text-gray-500 dark:text-gray-300">
                It is currently free, but there is a limited amount of GPT API
                per month and the limit may be reached at any time. 😄😄😄
              </p>
            </details>

            <details className="border-2 border-gray-100 rounded-lg dark:border-gray-700 group rounded-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How does this project work?
                </h1>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="p-8 leading-relaxed text-gray-500 dark:text-gray-300">
                Use <Link href="https://openai.com/chatgpt">ChatGPT</Link> to
                generate a cover letter. Using{" "}
                <Link href="https://nextjs.org/">NEXTJS</Link> to run the
                project. The server is hosted by{" "}
                <Link href="https://m.do.co/c/02c91f967ad7">DigitalOcean</Link>.
                💙💙💙
              </p>
            </details>

            <details className="border-2 border-gray-100 rounded-lg dark:border-gray-700 group rounded-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Other Questions && Contact Me ...
                </h1>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="p-8 leading-relaxed text-gray-500 dark:text-gray-300">
                If you have other questions or idea, please feel free to contact
                me via{" "}
                <Link href="https://twitter.com/Archie_818">Twitter</Link> or{" "}
                <Link href="https://www.linkedin.com/in/yangy818/">
                  LinkedIn
                </Link>
                . 🤗🤗🤗
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
