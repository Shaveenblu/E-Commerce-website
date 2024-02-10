import React from 'react'

const DarkMode = () => {
    const [theme,setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem ('theme') : 'light'

    )
    const element = document.documentElement

    React.useEffect(() => {
        if(theme=='dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])



return (
    <div className='relative'>
        <button onClick={() => setTheme(theme == 'light'? 'dark' : 'white')} className='py-2 px-0'>Dark</button>
        <button onClick={() => setTheme(theme == 'light'? 'dark' : 'white')} className='py-2 px-5'>Light</button>
    </div>
 
  )
}

export default DarkMode