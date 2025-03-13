// components/FeatureList.tsx

interface UlWithTicksProps {
  features: string[]
}

const FeaturesList: React.FC<UlWithTicksProps> = ({ features }) => {
  return (
    <div className="my-2 space-y-1">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <span className="text-primary-500 text-lg">✔</span>
          <span className="ml-2 text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  )
}

export default FeaturesList
