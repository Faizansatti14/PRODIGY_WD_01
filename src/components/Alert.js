import React from 'react'

export default function Alert(props) {
  return (
    props.alert&&<div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert"> {/*ya type k mutabaq alert da ga eg. success,warning*/}
        <strong>{props.alert.typ}</strong>:{props.alert.msg} {/* ya object ko call ke rha ha jo app.js ma bana ha*/}
        
   </div>
  )
}
