import ClientList from "@/components/client-list/Client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ClientList />
    </main>
  );
}
