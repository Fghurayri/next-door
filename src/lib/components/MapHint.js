import { useSearchEvents } from "../hooks/map/useSearchEvents";

export function MapHint() {
  const { onSearchByAreaClicked, onSearchNearMeClicked } = useSearchEvents();
  return (
    <div className="absolute flex flex-col justify-center items-center top-2 left-2 text-center bg-white text-gray-500 py-3 px-4 border-none rounded-lg z-10">
      ✨ click anywhere to add a listing there
      <HintButton
        text="🏙 click to search this area again"
        onClick={onSearchByAreaClicked}
      />
      <HintButton
        text="‍️🏡 click for listings within 2 miles from you"
        onClick={onSearchNearMeClicked}
      />
    </div>
  );
}

function HintButton({ text, onClick }) {
  return (
    <button
      className="border-none bg-indigo-500 text-white mt-2 py-1 px-2 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
