import React from "react";
import mapImage from "../assets/images/map.png";

const TruckOrder = ({ orderDate, deliveryDate }) => {
  const safeDate = (d) => {
    const dateObj = new Date(d);
    return isNaN(dateObj) ? new Date() : dateObj;
  };

  const formatDate = (date) => {
    return (
      date.toLocaleDateString("en-GB") +
      " " +
      date
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", ".")
    );
  };

  const start = safeDate(orderDate);
  const end = safeDate(deliveryDate);

  const diffMs = end.getTime() - start.getTime();
  const billingTime = new Date(start.getTime() + diffMs * 0.25);
  const loadingTime = new Date(start.getTime() + diffMs * 0.5);

  const steps = [
    {
      title: "PLACE YOUR ORDER",
      date: formatDate(start),
      style: "ring-with-dot",
    },
    {
      title: "BILLING YOUR ORDER",
      date: formatDate(billingTime),
      style: "ring-with-dot",
    },
    {
      title: "LOADING YOUR ORDER",
      date: formatDate(loadingTime),
      style: "ring-only",
    },
    {
      title: "DELIVERY EXPECTED",
      date: formatDate(end),
      style: "ring-only",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10 md:gap-20">
      {/* Steps */}
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-6">TRACK YOUR ORDER</h2>
        <div className="flex flex-col">
          {steps.map(({ title, date, style }, i) => (
            <div key={i} className="flex items-start gap-4 relative mb-10 last:mb-0">
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                {style === "ring-with-dot" && (
                  <div className="flex justify-center items-center w-8 h-8 rounded-full border-2 border-[#ED8F2F]">
                    <div className="w-5 h-5 bg-[#ED8F2F] rounded-full" />
                  </div>
                )}
                {style === "ring-only" && (
                  <div className="w-8 h-8 rounded-full border-2 border-[#ED8F2F] bg-white" />
                )}

                {/* Connector line (auto stretch) */}
                {i !== steps.length - 1 && (
                  <div className="flex-1 w-[2px] bg-black" />
                )}
              </div>

              {/* Text */}
              <div className="pt-1">
                <p className="font-bold text-sm">{title}</p>
                <p className="text-[10px]">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="w-full md:max-w-[400px] lg:max-w-[500px] flex-shrink md:flex-shrink-0 relative">
        <img
          src={mapImage}
          alt="Map showing delivery route"
          className="w-full h-auto object-contain"
        />
        <h5 className="absolute text-sm font-semibold text-black bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-[34px] lg:right-[48px]">
          CHERII BAKERY
        </h5>
        <h5 className="absolute text-sm font-semibold text-black top-4 left-4 md:top-5 md:left-10 lg:top-[21px] lg:left-[110px]">
          DELIVER LOCATION <br />
          THIPUPPUR
        </h5>
      </div>
    </div>
  );
};

export default TruckOrder;
