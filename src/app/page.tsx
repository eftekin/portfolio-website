import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Projects } from "@/components/home/Projects";
import { Timeline } from "@/components/home/Timeline";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[940px] px-8 pb-[88px] phone:px-5 phone:pb-[56px]">
      <Header />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
}
