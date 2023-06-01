import React from 'react'

const layout = ({children,params}) => {
    const searchId=params.blogId;
    console.log(searchId)

  return (
    <main>{children}</main>
  )
}

export default layout