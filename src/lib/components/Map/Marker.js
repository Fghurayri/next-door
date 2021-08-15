import React, { useMemo } from "react";
import { Marker as ReactMapGLMarker } from "react-map-gl";
import { useMarkerClickEvent } from "../../hooks/markers/useMarkerClickEvent";

export const Marker = React.memo(({ marker }) => {
  const onMarkerClick = useMarkerClickEvent();

  const listingPrice = useMemo(() => {
    if (marker.properties.price === 0) {
      return <span className="absolute -top-2 -right-2 text-2xl">🆓</span>;
    }
    return (
      <span className="flex justify-center items-center absolute bg-indigo-500 text-white -top-2 -right-2 p-1 rounded-full text-xs">
        ${marker.properties.price}
      </span>
    );
  }, []);

  return (
    <ReactMapGLMarker
      longitude={marker.geometry.coordinates[0]}
      latitude={marker.geometry.coordinates[1]}
      offsetLeft={-18}
      offsetTop={-18}
    >
      <div
        className="h-14 w-14 bg-white rounded-full text-3xl flex items-center justify-center cursor-pointer"
        onClick={onMarkerClick(marker)}
      >
        {listingPrice}
        {marker.properties.emoji}
      </div>
    </ReactMapGLMarker>
  );
});
