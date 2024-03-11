import ClientList from "@/components/client-list/Client";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ClientList />
      <Features />
    </main>
  );
}
