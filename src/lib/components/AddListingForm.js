import { useHandleAddListing } from "../hooks/form/useHandleAddListing";
import { useIsSubmittingListing } from "../hooks/form/useIsSubmittingListing";

const inputStyle =
  "mt-4 w-full h-8 border border-gray-300 border-dashed rounded-lg px-2";

export function AddListingForm() {
  const isSubmittingListing = useIsSubmittingListing();
  const handleSubmit = useHandleAddListing();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          required
          disabled={isSubmittingListing}
          name="emoji"
          placeholder="offer emoji (🛶)"
          className={inputStyle}
        />
        <div className="w-4"></div>
        <input
          required
          disabled={isSubmittingListing}
          name="price"
          type="number"
          placeholder="price (0 for free)"
          className={inputStyle}
        />
      </div>
      <input
        required
        disabled={isSubmittingListing}
        name="description"
        placeholder="short description"
        className={inputStyle}
      />
      <button
        disabled={isSubmittingListing}
        className={`border-none text-white py-1 px-2 rounded-lg mt-4 h-8 ${
          isSubmittingListing
            ? "bg-gray-400 cursor-wait"
            : "bg-indigo-500 cursor-pointer"
        }`}
        type="submit"
      >
        {isSubmittingListing ? "⏳" : "Add"}
      </button>
    </form>
  );
}
