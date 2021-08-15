import { useSelector } from "@xstate/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import { markersSelector } from "../../machines/selectors/marker.selectors";

export function useMarkers() {
  const { mapService } = useContext(GlobalContext);
  const markers = useSelector(mapService, markersSelector);
  return markers;
}
