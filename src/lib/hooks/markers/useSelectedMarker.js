import { useSelector } from "@xstate/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import { selectedMarkerSelector } from "../../machines/selectors/marker.selectors";

export function useSelectedMarker() {
  const { mapService } = useContext(GlobalContext);
  const selectedMarker = useSelector(mapService, selectedMarkerSelector);
  return selectedMarker;
}
