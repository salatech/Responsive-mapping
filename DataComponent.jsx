import React, { useEffect, useState } from 'react';

const data = {
  datum1: "datum 1",
  datum2: "datum 2",
  datum3: "datum 3",
  datum4: "datum 4",
  datum5: "datum 5"
};

const DataComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <=  800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataToMap = isMobile ? Object.values(data).slice(0, 3) : Object.values(data);

  return (
    <div>
      {dataToMap.map((datum, index) => (
        <div key={index}>{datum}</div>
      ))}
    </div>
  );
};

export default DataComponent;
