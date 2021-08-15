import { useSelector } from "@xstate/react";
import { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/Global";
import { viewportSelector } from "../../machines/selectors/map.selectors";

export function useMap(mapComponentRef) {
  const { mapService } = useContext(GlobalContext);
  const viewport = useSelector(mapService, viewportSelector);

  // Workaround since the map doesn't expose a consistent API to communicate when it is loaded & ready.
  useEffect(() => {
    const timeout = setTimeout(() => {
      saveMapComponentRef();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const saveMapComponentRef = useCallback(
    () =>
      mapService.send({
        type: "MAP_LOADED",
        mapComponentRef,
      }),
    []
  );

  const onMapClick = useCallback(
    ({ lngLat }) =>
      mapService.send({
        type: "MAP_CLICKED",
        clickedLocation: {
          lng: lngLat[0],
          lat: lngLat[1],
        },
      }),
    []
  );

  const onViewportChange = useCallback(
    (viewport) =>
      mapService.send({
        type: "UPDATE_VIEWPORT",
        viewport,
      }),
    []
  );

  return {
    viewport,
    onViewportChange,
    onMapClick,
  };
}
