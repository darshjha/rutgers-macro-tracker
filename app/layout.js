// app/layout.js
import "../globals.css"

export const metadata = {
  title: 'Rutgers Macro Tracker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}