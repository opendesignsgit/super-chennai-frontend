import React, { useState } from "react"

export default function FilterModal({
  categories,
  locations,
  onApply,
  onClose
}) {

  const [category,setCategory]=useState(null)
  const [location,setLocation]=useState(null)

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white w-[900px] rounded-xl p-6">

        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">
            Filter
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {/* locations */}
        <h4 className="font-medium mb-2">
          Locations
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">

          {locations?.map(loc=>(
            <button
              key={loc.id}
              onClick={()=>setLocation(loc.value)}
              className="border px-3 py-1 rounded-full"
            >
              {loc.locality}
            </button>
          ))}

        </div>

        {/* category */}
        <h4 className="font-medium mb-2">
          Category
        </h4>

        <div className="flex flex-wrap gap-2">

          {categories?.map(cat=>(
            <button
              key={cat.id}
              onClick={()=>setCategory(cat.slug)}
              className="border px-3 py-1 rounded-full"
            >
              {cat.title}
            </button>
          ))}

        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={()=>{
              onApply({category,location})
              onClose()
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full"
          >
            Apply
          </button>
        </div>

      </div>

    </div>
  )
}