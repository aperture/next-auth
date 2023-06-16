"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  console.dir(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">hi</div>
    </main>
  );
}
