import Image from "next/image";

export default function Home({ darkMode }) {
  return (
    <div className="h-screen dark:bg-darkbg">
      <div className="px-4 pt-24 mx-auto text-gray-900 max-w-7xl sm:px-6 lg:px-8 dark:text-white">
        <div className="flex items-center justify-center mx-auto rounded-full w-36 h-36 bg-darkbg">
          <Image
            className="object-cover mx-auto rounded-full"
            src="/govind.jpg"
            alt="govind"
            width={500}
            height={500}
          />
        </div>
        <p className="my-6 text-3xl font-thin text-center dark:text-white">
          Hey there, I'm{" "}
          <span className="my-6 text-3xl font-bold text-center dark:text-white">
            Govind!{" "}
          </span>
          I'm a{" "}
          <span className="my-6 text-3xl font-bold text-center dark:text-white">
            Software Engineer.{" "}
          </span>
          I usually build software with{" "}
          <a
            href="https://reactjs.org"
            className="my-6 text-3xl font-bold text-center dark:text-white"
          >
            {" "}
            React
          </a>
          ,
          <a
            href="https://nodejs.org"
            className="my-6 text-3xl font-bold text-center dark:text-white"
          >
            {" "}
            Node.js
          </a>
          ,
          <a
            href="https://nextjs.org"
            className="my-6 text-3xl font-bold text-center dark:text-white"
          >
            {" "}
            Next.js
          </a>
          , and
          <a
            href="https://mongodb.com"
            className="my-6 text-3xl font-bold text-center dark:text-white"
          >
            {" "}
            MongoDB
          </a>
          .
        </p>
        <p className="my-6 text-xl font-thin text-center dark:text-white">
          I also have experience with{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            MySQL
          </span>
          ,{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            jQuery
          </span>
          ,{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            PHP
          </span>
          ,{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            Python
          </span>
          ,{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            web-scraping
          </span>
          , and{" "}
          <span className="my-6 text-xl font-medium text-center dark:text-white">
            serverless functions.
          </span>
        </p>
      </div>
    </div>
  );
}
