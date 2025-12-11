export default async function handler(req, res) {
  const { orderID } = req.query;

  if (!orderID) {
    return res.status(400).send("Missing orderID");
  }

  return res.redirect(
    "https://drive.google.com/uc?export=download&id=1xUU66tnymfCyy11buwcCtdyZGfQJHBpL"
  );
}
