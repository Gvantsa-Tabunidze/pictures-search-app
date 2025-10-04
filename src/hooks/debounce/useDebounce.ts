'use client'

import React, { useEffect, useState } from 'react'

function useDebounce<T>(value:T, delay:number = 500) {
const [debouncedValue, setDebouncedValue] = useState(value);

useEffect(()=>{
  const debounceHandler = setTimeout(()=> setDebouncedValue(value), delay)
  return () => clearTimeout(debounceHandler);
},[value, delay])


  return debouncedValue
}

export default useDebounce
