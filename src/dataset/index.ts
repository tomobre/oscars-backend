import priceUpdate from "./price";

export default async function updateDB(time: number) {
  priceUpdate();
  console.log("isnide updatedb");
  setInterval(() => {
    priceUpdate();
  }, time);
}
