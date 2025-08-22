import { SquareClient, SquareEnvironment } from "square";

export default async function handler(req, res) {
  try {
    if (!process.env.SQUARE_ACCESS_TOKEN) {
      throw new Error("Missing SQUARE_ACCESS_TOKEN environment variable");
    }

    const client = new SquareClient({
      environment: SquareEnvironment.Production, // or Sandbox
      accessToken: process.env.SQUARE_ACCESS_TOKEN,
    });

    const catalogResponse = await client.catalog.list();
    const data = catalogResponse.result.objects || [];

    // Separate items and images
    const items = data.filter((obj) => obj.type === "ITEM");
    const images = data.filter((obj) => obj.type === "IMAGE");

    // Map image IDs to URLs
    const imageMap = {};
    images.forEach((img) => {
      imageMap[img.id] = img.image_data.url;
    });

    // Attach image URLs to items

    const itemsWithImages = items.map((item) => ({
      id: item.id,
      name: item.item_data.name,
      description: item.item_data.description || "",
      price:
        item.item_data.variations?.[0]?.item_variation_data?.price_money
          ?.amount || 0,
      image_url: imageMap[item.item_data.image_ids?.[0]] || null,
    }));

    res.status(200).json(itemsWithImages);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ error: "Error fetching menu" });
  }
}
