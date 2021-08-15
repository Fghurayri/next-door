import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../contexts/Global";
import { isViewingListingSelector } from "../../machines/selectors/map.selectors";

export function useIsViewingListing() {
  const { mapService } = useContext(GlobalContext);
  const isViewingListing = useSelector(mapService, isViewingListingSelector);
  return isViewingListing;
}
