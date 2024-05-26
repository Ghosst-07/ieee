import "@/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
