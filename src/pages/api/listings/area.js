import { getListingsInArea } from "../../../lib/api/services/listings";

export default async function handler(req, res) {
  try {
    switch (req.method.toLowerCase()) {
      case "post":
        return handleGettingListingsInArea(req, res);
      default:
        return res.status(404).json({});
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json({});
  }
}

async function handleGettingListingsInArea(req, res) {
  const body = JSON.parse(req.body);
  const { polygon } = body;

  const listings = await getListingsInArea(polygon);

  const geoJSONResponse = {
    type: "FeatureCollection",
    features: listings,
  };

  return res.status(200).json(geoJSONResponse);
}
