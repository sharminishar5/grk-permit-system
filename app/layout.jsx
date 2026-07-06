import "./globals.css";

export const metadata = {
  title: "GRK Permit Generator",
  description: "GRK Pyrotechnics Permit Application Portal",
  applicationName: "GRK Permit Generator",
  authors: [
    {
      name: "GRK Pyrotechnics Sdn. Bhd."
    }
  ],
  creator: "GRK Pyrotechnics Sdn. Bhd.",
  publisher: "GRK Pyrotechnics Sdn. Bhd.",
  robots: {
    index: false,
    follow: false
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}