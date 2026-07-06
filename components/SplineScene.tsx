'use client'

import { useMemo } from 'react'

// Lightweight Spline embed fallback using iframe to avoid requiring `react-spline`.
// This prevents build-time module resolution errors when the package isn't installed.
export default function SplineScene({ sceneUrl, className }: { sceneUrl: string, className?: string }) {
    const scene = useMemo(() => sceneUrl, [sceneUrl])

    if (!scene) return null

    // If the provided URL is an embeddable Spline scene, render it in an iframe.
    // Ensure the parent container controls sizing and overflow.
    return (
        <div className={className}>
            <iframe
                src={scene}
                title="Spline Scene"
                className="w-full h-full border-0"
                allow="clipboard-write; encrypted-media; fullscreen; geolocation; microphone; camera"
                loading="lazy"
            />
        </div>
    )
}
