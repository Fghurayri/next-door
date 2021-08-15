import { MapContainer } from "../lib/components/Map";
import { AddListingModal } from "../lib/components/AddListingModal";
import { useShouldModalOpen } from "../lib/hooks/modal/useShouldModalOpen";

export default function Page() {
  const shouldModalOpen = useShouldModalOpen();
  return (
    <div className="h-screen w-screen">
      {shouldModalOpen && <AddListingModal />}
      <MapContainer />
    </div>
  );
}
