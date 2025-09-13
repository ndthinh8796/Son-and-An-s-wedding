"use client";

import { preloadImage } from "@/lib/utils";
import { useEffect, useState } from "react";
import styles from "./loading-screen.module.scss";
/**
 * Loading screen component
 *
 * This component is used to display a loading screen with a progress bar when waiting for all images to load.
 *
 * @returns {JSX.Element} Loading screen component
 */
export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async () => {
      const images = [
        "/images/background.jpg",
        "/images/stars.png",
        "/images/cartoon-characters.png",
        "/images/bride-groom.png",
        "/images/an-and-son.png",
        "/images/getting-married.png",
        "/images/hearts.png",
        "/images/you-are-invited.png",
        "/images/invitation-coming-soon.png",
        "/images/rsvp-button.png",
      ];

      await Promise.all(images.map((image) => preloadImage(image)));
      setIsLoading(false);
    };
    handleLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background">
          <div className={styles.loader}></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
