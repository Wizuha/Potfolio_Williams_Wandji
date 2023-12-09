import React from 'react'
import './skills.css'

export default function skill(content) {
  return (
    <div className='skill'>
        <div className="domaine">{content["content"].domaine}</div>
        <div className="languages">{content["content"].content}</div>
    </div>
  )
}
