import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";
import { useRef } from "react";
import { Markers } from "./Markers";
import { useMap } from "../../hooks/map/useMap";

export function Map() {
  const mapComponentRef = useRef(null);
  const { viewport, onViewportChange, onMapClick } = useMap(mapComponentRef);

  return (
    <ReactMapGL
      ref={mapComponentRef}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      height="100%"
      width="100%"
      onViewportChange={onViewportChange}
      onClick={onMapClick}
      asyncRender={true}
      {...viewport}
    >
      <Markers />
    </ReactMapGL>
  );
}
