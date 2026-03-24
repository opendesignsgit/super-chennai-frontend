import React from "react"

export default function CategoryFilter({ data, onChange }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">

      <h3 className="font-semibold mb-3 text-gray-700">
        Categories
      </h3>

      <div className="flex flex-wrap gap-3">

        {data?.map(cat => (
          <button
            key={cat.id}
            onClick={()=>onChange(cat.slug)}
            className="flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition"
          >

            {cat.icon?.url && (
              <img
                src={`https://dev-cms.superchennai.com${cat.icon.url}`}
                className="w-5 h-5"
              />
            )}

            {cat.title}

          </button>
        ))}

      </div>

    </div>
  )
}