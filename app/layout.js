import { Roboto, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import TopLoader from "@/components/TopLoader";
import Navbar from "@/components/nav";
import AOSProvider from "@/components/aos-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
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
  metadataBase: new URL("https://mrc.frozenismail.xyz"),
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
    url: "https://mrc.frozenismail.xyz",
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
    <html
      className={`${roboto.variable} ${robotoMono.variable} ${originTech.variable}`}
      lang="en"
    >
      <body className={"antialiased"}>
        <AOSProvider>
          <TopLoader />
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
