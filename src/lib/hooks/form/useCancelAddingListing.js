import { useCallback, useContext } from "react";
import { GlobalContext } from "../../contexts/Global";

export function useCancelAddingListing() {
  const { mapService } = useContext(GlobalContext);

  const cancelAddingListing = useCallback(
    () => mapService.send({ type: "CANCEL_ADDING" }),
    []
  );

  return cancelAddingListing;
}
