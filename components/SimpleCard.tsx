const SimpleCard = ({ title, description, icon }) => (
  <div className="flex h-full flex-col rounded-lg bg-white bg-gradient-to-tr p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:from-gray-950 dark:to-gray-800 dark:shadow-none dark:hover:shadow-xl">
    {/* Icon and Title on the same line */}
    <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-600 dark:text-gray-300">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h3>

    {/* Spacer pushes text to the bottom if needed */}
    <p className="flex-grow text-base text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default SimpleCard
