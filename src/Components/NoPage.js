import React from 'react';

function NoPage(props) {

  return (
    <div>
        <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>NoPage</h1>
    </div>
  )
}

export default NoPage