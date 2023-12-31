import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"}>Home</Link>
      <Link href={"/movies"}>movies</Link>
    </div>
  );
};

export default Header;
