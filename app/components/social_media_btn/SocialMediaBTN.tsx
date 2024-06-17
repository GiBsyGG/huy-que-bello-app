import React from 'react'

type props = {
  name: string,
  url: string,
  icon: JSX.Element
}

export function SocialMediaBTN({name, url, icon}: props) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  )
}