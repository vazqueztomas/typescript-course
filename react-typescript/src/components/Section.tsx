import React, { ReactNode } from 'react';

type SectionProps = {
  title?: string,
  children: ReactNode
}

//this is another way to create a functional component
export const Section = ({children, title = 'My subheading'}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}