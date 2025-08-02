import { Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import Landing from "@/components/landing";
import "./globals.css";
import Footer from "@/components/footer";
import TopLoader from "@/components/TopLoader";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const originTech = localFont({
  src: [
    {
      path: "../public/fonts/origin-tech.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-origintech",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://mrc.mist.com"),
  title: {
    default: "MRC - MIST Robotics Club",
    template: "%s | MIST Robotics Club",
  },
  description:
    "Official website of MIST Robotics Club (MRC) - Premier robotics society at Military Institute of Science & Technology (MIST) fostering innovation in robotics, automation, and AI research.",
  keywords: [
    "MIST Robotics Club",
    "MRC MIST",
    "Military Institute robotics",
    "Bangladesh robotics society",
    "MIST automation",
    "AI research MIST",
    "engineering robotics",
    "student robotics team",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MRC - MIST Robotics Club",
    description:
      "Premier robotics society at Military Institute of Science & Technology",
    url: "https://mrc.mist.com",
    siteName: "MRC MIST",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MRC - MIST Robotics Club",
    description:
      "Premier robotics society at Military Institute of Science & Technology",
    images: ["/twitter-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${originTech.variable} antialiased`}
      >
        <Landing />
        <TopLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
