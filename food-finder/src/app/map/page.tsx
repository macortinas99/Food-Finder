import React from "react"
import Map from "../../components/Map"

const Page: React.FC = () => {
  return (
    <div className="relative">
      <Map />
      <div className="absolute top-0 bg-black p-2">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="bottom-0 absolute w-full flex flex-col">
        <div className="bg-black mx-auto p-2 rounded-lg -top-2 relative flex">
          <div className="w-6 h-6 border-t-2 border-r-2 border-blue-700 transform rotate-[135deg]"></div>
        </div>
        <div>
          <div className="bg-white shadow-md rounded-md p-4">
            <div></div>
          </div>
          {/* Add any additional information or buttons here */}
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-2xl font-bold mb-2">Restaurant Name</h2>
          <p className="text-gray-600 mb-4">Restaurant Address</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-600">4.5</span>
            <span className="text-gray-600 ml-2">(500+ reviews)</span>
          </div>
          {/* Add any additional information or buttons here */}
        </div>
      </div>
    </div>
  )
}

export default Page
