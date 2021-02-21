import { useState, useEffect } from 'react';

const useIpData = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const res2 = await fetch(`http://worldtimeapi.org/api/ip`);
    const data2 = await res2.json();

    setData({ ...data, ...data2 });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useIpData;
