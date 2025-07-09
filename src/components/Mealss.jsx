import { useEffect, useState } from "react";
import fetchMeals from "./utils/fetchMeals";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals("2025-07-01", "2025-07-07").then(setMeals);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🍽️ Weekly Mess Menu</h2>
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <ul className="list-disc pl-4">
          {meals.map((item, idx) => (
            <li key={idx}>
              <strong>{item.day}</strong> - {item.time}: {item.meal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Meals;
