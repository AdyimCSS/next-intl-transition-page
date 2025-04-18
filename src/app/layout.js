import "@/app/globals.css";
import "@/style/layout.css";
import "@/style/transition.css";

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}) {
  return children;
}