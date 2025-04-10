"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function TripMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // This is a placeholder for the actual map implementation
    // In a real application, you would use Google Maps, Mapbox, or another mapping service
    if (mapRef.current) {
      const timeout = setTimeout(() => {
        setMapLoaded(true)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-md bg-gray-100">
      <div ref={mapRef} className="h-full w-full">
        {!mapLoaded ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto"></div>
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            {/* Placeholder for the actual map */}
            <div className="absolute inset-0 bg-[#e5e3df]"></div>

            {/* Simulated route line */}
            <div className="absolute left-1/4 right-1/4 top-1/2 h-1 bg-primary"></div>

            {/* Simulated stops */}
            <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
            <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
            <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 border-2 border-white"></div>
            <div className="absolute right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-gray-400 border-2 border-white"></div>

            {/* Vehicle marker */}
            <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11 2 11.3V16c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <Card className="p-2 text-xs shadow-lg">
          <div className="font-medium">Current Location</div>
          <div className="text-muted-foreground">East Medical Plaza</div>
        </Card>
        <Card className="p-2 text-xs shadow-lg">
          <div className="font-medium">Next Stop</div>
          <div className="text-muted-foreground">West Checkpoint (ETA: 5 min)</div>
        </Card>
      </div>
    </div>
  )
}
