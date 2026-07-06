'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function DebugAnimations() {
    useEffect(() => {
        console.log('[DebugAnimations] mounted and rendering')
    }, [])

    return (
        <>
            {/* Framer Motion animation - bright magenta, horizontal slide */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '30px',
                    backgroundColor: '#ff1493',
                    borderRadius: '4px',
                    zIndex: 9999,
                    pointerEvents: 'none'
                }}
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* CSS animation - bright green, pulse */}
            <div
                style={{
                    position: 'fixed',
                    top: '70px',
                    left: '20px',
                    width: '60px',
                    height: '30px',
                    backgroundColor: '#00ff00',
                    borderRadius: '4px',
                    zIndex: 9999,
                    pointerEvents: 'none',
                    animation: 'debug-css-pulse 1s ease-in-out infinite'
                }}
            />

            <style>{`
        @keyframes debug-css-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.7); opacity: 0.4; }
        }
      `}</style>
        </>
    )
}
