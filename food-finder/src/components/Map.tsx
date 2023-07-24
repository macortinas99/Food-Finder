"use client"

import React, { useEffect } from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl"

function Map(): JSX.Element {
  useEffect(() => {
    mapboxgl.accessToken =
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN || ""
    const map = new mapboxgl.Map({
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
  }, [])

  return <div id="map" className="w-screen h-screen z-[-1]"></div>
}

export default Map
