import { useSelector } from "@xstate/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import { isSubmittingListingSelector } from "../../machines/selectors/form.selectors";

export function useIsSubmittingListing() {
  const { mapService } = useContext(GlobalContext);
  const isSubmittingListing = useSelector(
    mapService,
    isSubmittingListingSelector
  );
  return isSubmittingListing;
}
