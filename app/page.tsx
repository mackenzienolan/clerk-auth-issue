"use client";

import styles from "./page.module.css";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  // const { session } = useSession();
  const { getToken } = useAuth();
  const handleClick = async () => {
    const token = await getToken();
    console.log("token", token);
    // const token = await session?.getToken();
    fetch("/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </main>
  );
}
