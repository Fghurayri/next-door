import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../contexts/Global";
import { isLoadingSelector } from "../../machines/selectors/map.selectors";

export function useIsMapLoading() {
  const { mapService } = useContext(GlobalContext);
  const isLoading = useSelector(mapService, isLoadingSelector);
  return isLoading;
}
