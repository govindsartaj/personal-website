export default function ProjectCard({ src, title, body, tags, link }) {
  console.log(tags);

  return (
    <div className="h-auto overflow-hidden transition duration-100 ease-in-out transform rounded-lg shadow-lg w-sm hover:scale-105 dark:bg-darkCardGray">
    <a href={link} target="_blank">
      <img
        className="object-cover object-top w-full h-56 "
        src={src}
        alt="Mountain"
      ></img>
      <div className="px-6 py-2 overflow-hidden min-h-36">
        <div className="mb-2 text-xl font-semibold">{title}</div>
        <p className="text-base font-thin dark:text-white">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags
          ? tags.map((tag) => (
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-thin text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white">
                {tag}
              </span>
            ))
          : null}
      </div>
      </a>
    </div>
  );
}
