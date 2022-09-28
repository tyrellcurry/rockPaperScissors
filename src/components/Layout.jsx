import React from 'react'
import RulesButton from './RulesButton'

function layout({children}) {
  return (
    <main className='h-screen flex flex-col bg-gradient-radial from-radial-gradient-1 to-radial-gradient-2'>
        {children}
        <RulesButton />
    </main>
  )
}

export default layout