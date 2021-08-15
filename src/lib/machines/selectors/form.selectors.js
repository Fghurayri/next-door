export function isSubmittingListingSelector(state) {
  return state.matches("ready.adding.submitting");
}
