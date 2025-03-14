const SimpleCard = ({ title, description, icon }) => (
  <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
    {/* Icon and Title on the same line */}
    <h4 className="mb-3 flex items-center text-xl font-semibold text-gray-600">
      {icon && <span className="mr-2">{icon}</span>} {/* Add some margin for spacing */}
      {title}
    </h4>
    <p className="text-base text-gray-500">{description}</p>
  </div>
)

export default SimpleCard
