import { addListing } from "../../../lib/api/services/listings";

export default async function handler(req, res) {
  try {
    switch (req.method.toLowerCase()) {
      case "post":
        return handleAddingListing(req, res);
      default:
        return res.status(404).json({});
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json({});
  }
}

async function handleAddingListing(req, res) {
  const body = JSON.parse(req.body);
  const { lng, lat, price, description, emoji } = body;

  if (!lng || !lat || !description || !emoji) {
    return res.status(400).json({});
  }

  const listing = await addListing({ lat, lng, price, description, emoji });

  return res.status(201).json(listing);
}
