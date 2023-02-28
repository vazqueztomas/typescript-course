import React, { ReactElement } from 'react'

// when i use typescript and react, declare the type of props is a good practice.
type HeadingProps = {
  title: string
}

// i destructure the HeadingProps and pass it to the Heading component
const Heading = ({title}: HeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading 