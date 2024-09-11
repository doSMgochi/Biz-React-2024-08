import MainNav from "@/comps/MainNav";
import styles from "./page.module.css";
import LoginComps from "@/comps/Login";

const Home = () => {
  return (
    <div className={styles.page}>
      <MainNav />
      <main className={styles.main}>
        <LoginComps />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Home;
