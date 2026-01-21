'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Props = {
  className?: string
}

const LATITUDE = 47.558440517360786
const LONGITUDE = 7.587487440917944
const ZOOM = 14

export default function Map({ className }: Props) {
  return (
    <MapContainer
      center={[LATITUDE, LONGITUDE]}
      zoom={ZOOM}
      className={className}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[LATITUDE, LONGITUDE]} />
    </MapContainer>
  )
}
