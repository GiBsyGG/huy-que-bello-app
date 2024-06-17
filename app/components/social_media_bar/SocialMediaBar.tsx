import React from 'react'

import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { SocialMediaBTN } from '@/app/components';


const socialMediaList = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/',
    icon: <FaTiktok />
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: <FaFacebookSquare />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: <RiInstagramFill />
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/',
    icon: <FaYoutube />
  }
]


export function SocialMediaBar() {
  return (
    <div>
      {socialMediaList.map((socialMedia) => 
        <SocialMediaBTN
        key={socialMedia.name}
        name={socialMedia.name}
        url={socialMedia.url}
        icon={socialMedia.icon}
        />
      )}
    </div>
  )
}