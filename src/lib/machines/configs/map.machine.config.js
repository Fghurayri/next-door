import { assign } from "xstate";
import { getUserLocation } from "../../services/userLocation";
import { convertBoundToPolygon } from "../../services/map";
import {
  addListing,
  getListingsByArea,
  getListingsNearMe,
} from "../../services/listings";

export const mapMachineConfig = {
  guards: {
    isUserLocationAcquired: (ctx, _ev) =>
      ctx.userLocation.lng !== undefined && ctx.userLocation.lat !== undefined,
  },
  actions: {
    logError: (_ctx, ev) => console.log("Error", ev),
    saveMapComponentRef: assign({
      mapComponentRef: (_ctx, ev) => ev.mapComponentRef,
    }),
    saveNewViewport: assign({
      viewport: (_ctx, ev) => ev.viewport,
    }),
    saveUserLocation: assign({
      userLocation: (_ctx, ev) => ev.data.userLocation,
    }),
    saveListings: assign({
      markers: (_ctx, ev) => ev.data.features,
    }),
    saveNewListing: assign({
      markers: (ctx, ev) => ctx.markers.concat(ev.data),
    }),
    jumpToUserLocation: assign({
      viewport: (ctx, _ev) => ({
        ...ctx.viewport,
        longitude: ctx.userLocation.lng,
        latitude: ctx.userLocation.lat,
        zoom: 14,
      }),
    }),
    saveSelectedMarker: assign({
      selectedMarker: (_ctx, ev) => ev.marker,
    }),
    clearSelectedMarker: assign({
      selectedMarker: (_ctx, _ev) => {},
    }),
    saveClickedLocation: assign({
      clickedLocation: (_ctx, ev) => ev.clickedLocation,
    }),
    clearClickedLocation: assign({
      clickedLocation: (_ctx, ev) => ({ lng: undefined, lat: undefined }),
    }),
  },
  services: {
    fetchListingsByArea: async (ctx, _ev) => {
      const map = ctx.mapComponentRef.current.getMap();
      const bounds = map.getBounds();
      const polygon = convertBoundToPolygon(bounds);
      return await getListingsByArea(polygon);
    },
    fetchListingsNearMe: async (ctx, _ev) => {
      return await getListingsNearMe(ctx.userLocation);
    },
    addNewListing: async (_ctx, ev) => {
      return await addListing(ev.data);
    },
    getUserLocation: async (_ctx, _ev) => {
      return await getUserLocation();
    },
  },
};
