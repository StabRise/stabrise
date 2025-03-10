import Link from './Link'

const SimpleCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    {/* Icon and Title on the same line */}
    <h3 className="text-primary-500 text-xl font-semibold mb-3 flex items-center">
      {icon && <span className="mr-2">{icon}</span>} {/* Add some margin for spacing */}
      {title}
    </h3>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

export default SimpleCard;
