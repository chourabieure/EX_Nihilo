import { useState, useEffect, ReactNode } from 'react'
import styles from './Layout.module.css'
import React, { } from "react";

interface Props {
    children?: ReactNode
}

const TransitionLayout = ({ children }: Props) => {
    const [displayChildren, setDisplayChildren] = useState(children)
    const [transitionStage, setTransitionStage] = useState('fadeOut')
    useEffect(() => {
        setTransitionStage('fadeIn')
    }, [])

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage('fadeOut')
    }, [children, setDisplayChildren, displayChildren])

    return (
        // <div
        //     onTransitionEnd={() => {
        //         if (transitionStage === 'fadeOut') {
        //             console.log('fading out')
        //             setDisplayChildren(children)
        //             setTransitionStage('fadeIn')
        //         }
        //     }}
        //     className={`${styles.content} ${styles[transitionStage]} flex flex-col items-center pt-10`}>
        //     {displayChildren}
        // </div>
        <main className=''>
            {children}
        </main>
    )
}

export default TransitionLayout