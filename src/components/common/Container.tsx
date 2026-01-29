import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 w-full max-w-[1440px]">
      {children}
    </div>
  )
}

export default Container