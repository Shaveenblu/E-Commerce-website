import React from 'react'

const DarkMode = () => {
    const [theme,setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem ('theme') : 'light'

    )
const element = document.documentElement
return (
    <div className='relative'>
    </div>
 
  )
}

export default DarkMode