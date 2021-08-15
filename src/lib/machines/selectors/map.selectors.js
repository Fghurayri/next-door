export function isLoadingSelector(state) {
  return state.matches("init") || state.matches("ready.loading");
}

export function viewportSelector(state) {
  return state.context.viewport;
}

export function isViewingListingSelector(state) {
  return state.matches("ready.viewing.viewingListing");
}
