import { Popup as ReactMapGLPopup } from "react-map-gl";
import { useMarkerClickEvent } from "../../hooks/markers/useMarkerClickEvent";
import { useSelectedMarker } from "../../hooks/markers/useSelectedMarker";

export function Popup() {
  const selectedMarker = useSelectedMarker();
  const onMarkerClick = useMarkerClickEvent();

  return (
    <ReactMapGLPopup
      longitude={selectedMarker.geometry.coordinates[0]}
      latitude={selectedMarker.geometry.coordinates[1]}
      closeButton={false}
      offsetTop={-15}
      onClose={onMarkerClick()}
    >
      <div className="py-1 px-2">
        <pre>{selectedMarker.properties.description}</pre>
      </div>
    </ReactMapGLPopup>
  );
}
