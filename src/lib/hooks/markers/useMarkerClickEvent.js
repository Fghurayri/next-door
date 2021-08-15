import { useCallback, useContext } from "react";
import { GlobalContext } from "../../contexts/Global";

export function useMarkerClickEvent() {
  const { mapService } = useContext(GlobalContext);

  const onMarkerClick = useCallback(
    (marker) => () =>
      mapService.send({
        type: "MARKER_CLICKED",
        marker,
      }),
    []
  );

  return onMarkerClick;
}
