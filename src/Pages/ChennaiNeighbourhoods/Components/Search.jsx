

import React, { useState } from "react"

export default function SearchChennai({ onSearch }) {
  const [value, setValue] = useState("")

  const handleSearch = () => {
    onSearch(value)
  }

  return (

    <div className="container max-w-7xl mx-auto px-4 seachconatiners"> 
      <div className="mb-6 filtersearchnewmain">
        <div className="flex gap-2 filtersearchnew">

          <input
            className="border p-3 w-full rounded-lg searchhoodfilter"
            placeholder="Find your Location / PIN code"
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
            className="searchbuttonfilt"
          >
            Search
          </button>

        </div>
      </div>
    </div>
  )
}