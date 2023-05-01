import Link from "next/link";
import { date } from "../util/helper";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <Link href="/">
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright {date.getFullYear()} Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
