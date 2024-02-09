import { useEffect, useState } from "react";
import { off, on } from './utils'



const useScrollingUp = () => {
    let prevScroll

    if(process.browser) {
        prevScroll = window.pageYOffset
    }
    const [scrollingUp, setScrollingUp] = useState(false)
    const handleScroll = () => {
        const currScroll = window.pageYOffset
        const isScrolled = prevScroll > currScroll
        setScrollingUp(isScrolled)
        prevScroll
    }
    useEffect(() => {
        on(window, 'scroll', handleScroll, { passive:true })
        return () => {
            off(window, 'scroll', handleScroll, {passive:true})
        }
    },[])
    return scrollingUp
}

export default useScrollingUp