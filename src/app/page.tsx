import Link from "next/link";
import style from "./style.module.css";

export default async function Home() {
  return (
    <main>
      <h1>날씨 앱</h1>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
        </li>
        <li>
          <Link href="/new_york?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
    </main>
  );
}
