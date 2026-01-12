import "./globals.css";

export const metadata = {
  title: "Athena Spot Engine",
  description: "Automated Binance Spot Trading Software"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
