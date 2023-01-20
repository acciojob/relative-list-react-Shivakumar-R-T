import React, { useState } from 'react'

const App = () => {
  const [relatives, setRelatives] = useState(['Prasanna', 'Manjula', 'Divya', 'Sandhya'])
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol>
        {relatives.map((relative,idx) => { 
       return   <li key={relative+idx}> Name: {relative}</li>
        })}
      </ol>

    </div>
  )
}

export default App
