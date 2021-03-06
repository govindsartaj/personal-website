export default function ProjectCardGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {children}
    </div>
  );
}
