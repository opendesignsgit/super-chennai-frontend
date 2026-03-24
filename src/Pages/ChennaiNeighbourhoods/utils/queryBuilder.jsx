export function buildQuery(filters) {
  const params = new URLSearchParams()

  Object.entries(filters).forEach(([k,v])=>{
    if(v) params.append(k,v)
  })

  return params.toString()
}