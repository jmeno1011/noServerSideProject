import { Link } from "react-router-dom";
import styles from "./css/styles.module.css"

export function About() {
  return (
    <div className={styles.app}>
      <main>
        <h2>Here is About page</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/" className="a-white">Home</Link>
      </nav>
    </div>
  );
}
