import React from 'react'

export const metadata = {
  title: "Lakshya Roonwal Blog",
  description: "My Blog Website Where I Share My jouney of Code",
  keywords: ['Next.js', 'React', 'JavaScript','Programming','Journal','Web Development'],
  creator: 'Lakshya Roonwal',
  publisher: 'Lakshya Roonwal',
};

const layout = async({children,params}) => {
  return (
    <main>{children}</main>
  )
}

export default layout