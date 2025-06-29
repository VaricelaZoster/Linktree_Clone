'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Success = () => {
    const router = useRouter()


    function push(){
        router.push('/design')
    }

    setTimeout(
        push,2000
    )

    return (
        <div>Success</div>
    )
}

export default Success