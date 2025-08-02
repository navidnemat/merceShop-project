"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../nprogressStyle.css'

export default function ProgressBar() {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.configure({showSpinner : false})
    NProgress.start()
    NProgress.set(0.3)

    const timer = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => {
      clearTimeout(timer)
      NProgress.done()
    }
  }, [pathname])

  return null
}