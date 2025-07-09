// fetchMeals.js

/**
 * Fetches meals from the external JSON mess menu
 * Filters by date range (YYYY-MM-DD format)
 */
export default async function fetchMeals(startDate, endDate) {
  const url = 'https://raw.githubusercontent.com/life2harsh/mess-schedular/main/mess_menu.json';

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);

    const data = await res.json();

    // Convert date strings to Date objects for filtering
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Flatten and filter meals
    const filtered = [];
    for (const [day, meals] of Object.entries(data)) {
      for (const [time, meal] of Object.entries(meals)) {
        filtered.push({ day, time, meal });
      }
    }

    return filtered;
  } catch (err) {
    console.error("Error fetching mess menu:", err);
    return [];
  }
}
