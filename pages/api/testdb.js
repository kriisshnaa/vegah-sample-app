import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("vegah-demo"); // replace with your DB name
    const collection = db.collection("test");

    await collection.insertOne({ msg: "Hello MongoDB 🚀" });

    const docs = await collection.find().toArray();

    res.status(200).json({ success: true, data: docs });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
}
