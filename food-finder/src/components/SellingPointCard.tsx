import React from "react"

interface SellingPointCardProps {
  title: string
  description: string
}

const SellingPointCard: React.FC<SellingPointCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative h-64 bg-blue-600 rounded-md shadow-md p-6 w-[70%] mx-auto flex flex-col justify-center">
      <h2 className="text-xl font-extrabold text-white tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-base text-gray-400">{description}</p>
    </div>
  )
}

export default SellingPointCard
