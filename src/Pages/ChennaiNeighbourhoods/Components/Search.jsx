import React, { useState } from "react"

export default function SearchChennai({ onSearch }) {
  const [value, setValue] = useState("")

  const handleSearch = () => {
    onSearch(value)
  }

  return (
    <div className="mb-6">
      <div className="flex gap-2">

        <input
          className="border p-3 w-full rounded-lg"
          placeholder="Find your location or pincode..."
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              handleSearch()
            }
          }}
        />

        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-6 rounded-lg hover:bg-purple-700"
        >
          Search
        </button>

      </div>
    </div>
  )
}