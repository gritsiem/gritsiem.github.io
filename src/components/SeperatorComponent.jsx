import React from 'react'

export default function SeperatorComponent({title}) {
  return (
    <div className="seperator-container" id={title}>
            <p>
            {title}
            </p>
    </div>
  )
}
