import Footer from "@/components/Footer";
import ExperienceList from "@/components/ExperienceList";

const EXPERIENCE = [
  {
    role: "impulse",
    year: "2026",
    href: "https://www.instagram.com/impulsegatech/",
    description: "co-founder",
  },
  {
    role: "apple",
    year: "2026",
    href: "https://www.apple.com",
    description: "content development intern",
  },
  {
    role: "jared's heart of success",
    year: "2025",
    href: "https://www.jaredsheartofsuccess.org",
    description: "brand + graphic designer",
  },
  {
    role: "camp swamp",
    year: "2024",
    href: "https://campswamp.com",
    description: "media relations management intern",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col px-6 pt-20 sm:px-12 sm:pt-28">
      <div className="flex flex-1 flex-col justify-end pt-16 font-body text-stone">
        <p className="text-sm">my experience</p>
        <div className="mt-4">
          <ExperienceList items={EXPERIENCE} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
