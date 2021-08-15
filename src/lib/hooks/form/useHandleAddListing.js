import { useCallback, useContext } from "react";
import { GlobalContext } from "../../contexts/Global";

export function useHandleAddListing() {
  const { mapService } = useContext(GlobalContext);

  const handleAddListing = useCallback((e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const { lng, lat } = mapService.state.context.clickedLocation;

    mapService.send({
      type: "SUBMIT",
      data: {
        ...data,
        lng,
        lat,
      },
    });
  }, []);

  return handleAddListing;
}
