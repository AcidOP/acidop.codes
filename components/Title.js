import React from 'react'

const Title = ({ children }) => {
  return (
    <>
      <br />
      <h1 className="mb-4 text-primary-500 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{children}</h1>
    </>
  )
}

export default Title
