'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Success = () => {
    const router = useRouter()
    const user = localStorage.getItem("username")

    function push(){
        router.push(`/design?user=${user}`)
    }

    setTimeout(
        push,2000
    )

    return (
        <div>Success</div>
    )
}

export default Success