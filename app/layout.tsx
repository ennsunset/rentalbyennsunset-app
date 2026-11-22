import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentByEnn — Take the scenic route",
  description: "Find your perfect drive. Browse a hand-picked fleet of premium cars and start your next great escape with RentByEnn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
