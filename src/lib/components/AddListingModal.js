import { useCancelAddingListing } from "../hooks/form/useCancelAddingListing";
import { AddListingForm } from "./AddListingForm";

function stopClickPropagation(e) {
  e.stopPropagation();
}

export function AddListingModal() {
  const cancelAddingListing = useCancelAddingListing();
  return (
    <div
      className="absolute h-screen w-screen top-0 left-0 flex justify-center items-center z-20 bg-opacity-50 bg-black"
      onClick={cancelAddingListing}
    >
      <div
        className="rounded-lg bg-white p-4 w-80"
        onClick={stopClickPropagation} // To not dismiss the modal by clicking anywhere withing the form
      >
        <AddListingForm />
      </div>
    </div>
  );
}
