import { useSelector } from "@xstate/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import { shouldModalOpenSelector } from "../../machines/selectors/modal.selectors";

export function useShouldModalOpen() {
  const { mapService } = useContext(GlobalContext);
  const shouldModalOpen = useSelector(mapService, shouldModalOpenSelector);
  return shouldModalOpen;
}
