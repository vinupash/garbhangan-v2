import { useState, useEffect } from "react";

const usePromoVideo = (duration = 7000) => {
  const [promoVideo, setPromoVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPromoVideo(!promoVideo);
    }, duration);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return { promoVideo };
};

export default usePromoVideo;
