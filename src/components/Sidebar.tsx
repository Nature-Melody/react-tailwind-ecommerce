export const Sidebar = () => {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Category 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Category 3
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
