import { getListingsNearLocation } from "../../../lib/api/services/listings";

export default async function handler(req, res) {
  try {
    switch (req.method.toLowerCase()) {
      case "post":
        return handleGettingListingsNearMe(req, res);
      default:
        return res.status(404).json({});
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json({});
  }
}

async function handleGettingListingsNearMe(req, res) {
  const body = JSON.parse(req.body);
  const { lng, lat } = body;

  if (!lng || !lat) {
    return res.status(400).send("Please provide your longitude and latitude");
  }

  const listings = await getListingsNearLocation({ lng, lat });

  const geoJSONResponse = {
    type: "FeatureCollection",
    features: listings,
  };

  return res.status(200).json(geoJSONResponse);
}
