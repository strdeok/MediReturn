import { useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

export default function useGetNowLocation() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return location;
}
