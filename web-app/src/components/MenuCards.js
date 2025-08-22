import { useEffect, useState } from "react";

export const MenuPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [milks, setMilks] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
      })
      .then((data) => setDrinks(data.ittems || []))
      .catch((err) => console.error("Couldn't fetch: ", err));
  }, []);

  if (drinks.length === 0) return <p>Loading Menu... </p>;

  return (
    <div className="menu-page">
      {drinks.map((item) => (
        <div key={item.id} className="menu-item">
          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.item_data.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
          )}
          <h1>{item.item_data.name}</h1>
          <h3>{item.item_data.description}</h3>
          <br />
          {item.item_data.variations?.[0]?.item_variation_data?.price_money && (
            <p>
              $
              {(
                item.item_data.variations[0].item_variation_data.price_money
                  .amount / 100
              ).toFixed(2)}
            </p>
          )}
          <div className="menu-item-categories">
            {}
            {}
            {}
          </div>
        </div>
      ))}
    </div>
  );
};
