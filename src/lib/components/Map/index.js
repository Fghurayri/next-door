import { LoadingListings } from "../LoadingListings";
import { MapHint } from "../MapHint";
import { Map } from "./Map";
import { useIsMapLoading } from "../../hooks/map/useIsMapLoading";

export function MapContainer() {
  const isLoading = useIsMapLoading();
  return (
    <>
      {isLoading ? <LoadingListings /> : <MapHint />}
      <Map />
    </>
  );
}
