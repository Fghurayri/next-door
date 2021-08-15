import { Popup } from "./Popup";
import { Marker } from "./Marker";
import { useMarkers } from "../../hooks/markers/useMarkers";
import { useMemo } from "react";
import { useIsViewingListing } from "../../hooks/map/useIsViewingListing";

export function Markers() {
  const markers = useMarkers();
  const isViewingListing = useIsViewingListing();

  const memoedMarkers = useMemo(() => {
    if (!Array.isArray(markers) || !markers.length) {
      return null;
    }
    return markers.map((listing) => (
      <Marker key={listing._id} marker={listing} />
    ));
  }, [markers]);

  return (
    <>
      {memoedMarkers}
      {isViewingListing && <Popup />}
    </>
  );
}
