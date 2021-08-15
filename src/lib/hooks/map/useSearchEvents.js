import { useCallback, useContext } from "react";
import { GlobalContext } from "../../contexts/Global";

export function useSearchEvents() {
  const { mapService } = useContext(GlobalContext);

  const onSearchByAreaClicked = useCallback(
    () => mapService.send({ type: "SEARCH_BY_AREA" }),
    []
  );

  const onSearchNearMeClicked = useCallback(
    () => mapService.send({ type: "SEARCH_NEAR_ME" }),
    []
  );

  return { onSearchByAreaClicked, onSearchNearMeClicked };
}
