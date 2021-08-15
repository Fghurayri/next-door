import { createMachine } from "xstate";
import { mapMachineConfig } from "./configs/map.machine.config";

export const mapMachine = createMachine(
  {
    id: "mapMachine",
    initial: "init",
    context: {
      mapComponentRef: undefined,
      viewport: {
        longitude: -80.897662,
        latitude: 35.484788,
        zoom: 13,
      },
      markers: [],
      selectedMarker: {},
      userLocation: {
        lng: undefined,
        lat: undefined,
      },
      clickedLocation: {
        lng: undefined,
        lat: undefined,
      },
    },
    states: {
      init: {
        on: {
          MAP_LOADED: {
            target: "ready",
            actions: "saveMapComponentRef",
          },
        },
      },
      ready: {
        id: "ready",
        initial: "loading",
        states: {
          loading: {
            initial: "byArea",
            states: {
              byArea: {
                invoke: {
                  id: "loadingByArea",
                  src: "fetchListingsByArea",
                  onDone: {
                    target: "#ready.viewing.viewingMap",
                    actions: "saveListings",
                  },
                  onError: {
                    target: "#ready.viewing.viewingMap",
                    actions: "logError",
                  },
                },
              },
              nearMe: {
                invoke: {
                  id: "loadingNearMe",
                  src: "fetchListingsNearMe",
                  onDone: {
                    target: "#ready.viewing.viewingMap",
                    actions: ["saveListings", "jumpToUserLocation"],
                  },
                  onError: {
                    target: "#ready.viewing.viewingMap",
                    actions: "logError",
                  },
                },
              },
            },
          },
          viewing: {
            initial: "viewingMap",
            states: {
              viewingMap: {
                on: {
                  UPDATE_VIEWPORT: {
                    actions: "saveNewViewport",
                  },
                  SEARCH_BY_AREA: "#ready.loading.byArea",
                  SEARCH_NEAR_ME: [
                    {
                      cond: "isUserLocationAcquired",
                      target: "#ready.loading.nearMe",
                    },
                    "#ready.acquiringUserLocation",
                  ],
                  MARKER_CLICKED: {
                    target: "viewingListing",
                    actions: "saveSelectedMarker",
                  },
                  MAP_CLICKED: {
                    target: "#ready.adding",
                    actions: "saveClickedLocation",
                  },
                },
              },
              viewingListing: {
                on: {
                  MARKER_CLICKED: {
                    target: "viewingMap",
                  },
                  MAP_CLICKED: {
                    target: "viewingMap",
                  },
                },
                exit: "clearSelectedMarker",
              },
            },
          },
          adding: {
            initial: "editing",
            states: {
              editing: {
                on: {
                  SUBMIT: "submitting",
                  CANCEL_ADDING: "#ready.viewing.viewingMap",
                },
              },
              submitting: {
                invoke: {
                  id: "addNewListing",
                  src: "addNewListing",
                  onDone: {
                    target: "#ready.viewing.viewingMap",
                    actions: "saveNewListing",
                  },
                  onError: {
                    target: "editing",
                    actions: "logError",
                  },
                },
              },
            },
          },
          acquiringUserLocation: {
            invoke: {
              id: "getUserLocation",
              src: "getUserLocation",
              onDone: {
                target: "#ready.loading.nearMe",
                actions: "saveUserLocation",
              },
              onError: {
                target: "#ready.viewing.viewingMap",
                actions: "logError",
              },
            },
          },
        },
      },
    },
  },
  mapMachineConfig
);
