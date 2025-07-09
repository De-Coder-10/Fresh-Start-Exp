import React, { useEffect, useState } from "react";

const MessScheduler = () => {
  const [menu62, setMenu62] = useState(null);
  const [menu128, setMenu128] = useState(null);
  const [mode, setMode] = useState("both");
  const [showFullWeek, setShowFullWeek] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res62 = await fetch(
          "https://raw.githubusercontent.com/life2harsh/mess-schedular/main/mess_menu.json"
        );
        const data62 = await res62.json();
        setMenu62(data62.menu);

        const res128 = await fetch(
          "https://raw.githubusercontent.com/life2harsh/mess-schedular/main/mess_128_menu.json"
        );
        const data128 = await res128.json();
        setMenu128(data128.menu);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    };

    fetchMenus();
  }, []);

  const getTodayMeals = (menu) => {
    const dayName = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
    });
    const key = Object.keys(menu).find((k) =>
      k.toLowerCase().includes(dayName.toLowerCase())
    );
    return key ? menu[key] : null;
  };

  const MealSection = ({ title, items }) => (
    <div className="mb-4 last:mb-0">
      <h3 className="text-lg font-semibold text-teal-400 mb-2 border-b border-teal-600 pb-1">
        {title}
      </h3>
      <ul className="list-disc list-inside text-gray-200 ml-4">
        {items.map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const CampusMenuCard = ({ campus, menuData, isToday = false }) => {
    if (!menuData) {
      return (
        <div className="bg-[#2d2d3d] p-6 rounded-xl shadow-lg w-full max-w-md text-white border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {campus} Mess
          </h2>
          <p className="text-center text-gray-400">
            No menu data available for {campus}.
          </p>
        </div>
      );
    }

    const todayDateString = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="bg-[#2d2d3d] p-8 rounded-xl shadow-2xl w-full max-w-lg text-white transform hover:scale-105 transition duration-300 ease-in-out border border-indigo-700 relative">
        {isToday && (
          <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
            Today's Menu
          </span>
        )}
        <h2 className="text-3xl font-extrabold mb-4 text-center text-indigo-400 border-b-2 border-indigo-600 pb-2">
          {campus} Mess Menu
        </h2>
        {isToday && (
          <p className="text-sm text-gray-400 mb-6 text-center">
            {todayDateString}
          </p>
        )}

        {Object.keys(menuData).length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            No specific meals listed.
          </p>
        )}

        {Object.entries(menuData).map(([mealType, mealItems]) => {
          if (mealType.toLowerCase() === "all" && mealItems) {
            return (
              <MealSection
                key="all"
                title="Full Day Meal"
                items={[mealItems]}
              />
            );
          }
          if (mealItems) {
            return (
              <MealSection
                key={mealType}
                title={mealType}
                items={
                  Array.isArray(mealItems)
                    ? mealItems
                    : mealItems.split(",").map((item) => item.trim())
                }
              />
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="py-12 px-4 flex flex-col items-center text-white bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1c] min-h-screen font-sans">
      <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 drop-shadow-lg">
        Mess Scheduler
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10 p-4 bg-[#2a2a3a] rounded-xl shadow-inner border border-gray-700">
        <button
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
            mode === "62"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={() => setMode("62")}
        >
          62 Only
        </button>
        <button
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
            mode === "128"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={() => setMode("128")}
        >
          128 Only
        </button>
        <button
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
            mode === "both"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
          onClick={() => setMode("both")}
        >
          Both
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-start w-full max-w-6xl mb-12">
        {(mode === "62" || mode === "both") && (
          <CampusMenuCard campus="62" menuData={getTodayMeals(menu62 || {})} isToday={true} />
        )}
        {(mode === "128" || mode === "both") && (
          <CampusMenuCard campus="128" menuData={getTodayMeals(menu128 || {})} isToday={true} />
        )}
      </div>

      <button
        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 transition duration-300 ease-in-out text-white font-bold text-lg shadow-xl animate-bounce-slow"
        onClick={() => setShowFullWeek((prev) => !prev)}
      >
        {showFullWeek ? "Hide Full Week Schedule" : "Show Full Week Schedule"}
      </button>

      {showFullWeek && (
        <div className="mt-12 w-full max-w-7xl">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Full Week Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day) => (
                <div
                  key={day}
                  className="bg-[#2a2a3a] p-6 rounded-xl shadow-lg border border-gray-600 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <h3 className="text-2xl font-bold text-teal-300 mb-4 border-b border-teal-700 pb-2">
                    {day}
                  </h3>
                  {mode !== "128" && (
                    <div className="mb-6">
                      <p className="text-md font-semibold text-indigo-400 mb-2">
                        62 Campus
                      </p>
                      {(() => {
                        const dayKey = Object.keys(menu62 || {}).find((k) =>
                          k.toLowerCase().includes(day.toLowerCase())
                        );
                        const data = menu62?.[dayKey];
                        return data ? (
                          <div className="space-y-2">
                            {["Breakfast", "Lunch", "Dinner"].map((m) => (
                              <p key={m} className="text-gray-300">
                                <span className="font-semibold text-blue-300">
                                  {m}:
                                </span>{" "}
                                {data[m] || "Not available"}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400">No data available</p>
                        );
                      })()}
                    </div>
                  )}
                  {mode !== "62" && (
                    <div>
                      <p className="text-md font-semibold text-indigo-400 mb-2">
                        128 Campus
                      </p>
                      {(() => {
                        const dayKey = Object.keys(menu128 || {}).find((k) =>
                          k.toLowerCase().includes(day.toLowerCase())
                        );
                        const data = menu128?.[dayKey];
                        if (!data)
                          return (
                            <p className="text-gray-400">No data available</p>
                          );

                        const all = data.all;
                        if (all)
                          return (
                            <p className="text-gray-300">
                              <span className="font-semibold text-blue-300">
                                All:
                              </span>{" "}
                              {all}
                            </p>
                          );

                        return Object.keys(data).map((k) => (
                          <p key={k} className="text-gray-300">
                            <span className="font-semibold text-blue-300">
                              {k}:
                            </span>{" "}
                            {data[k]}
                          </p>
                        ));
                      })()}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessScheduler;