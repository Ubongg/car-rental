import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.imgBx}>
          <Image
            src="/assets/hero.jpeg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.textBx}>
          <h6>We Are Yubo Rentals</h6>
          <h2>
            We are the <span>largest</span> leading commercial and luxury cars
            rental.
          </h2>
          <p>
            Embark on unforgettable adventures and discover the world in
            unparalleled comfort and style with our fleet of exceptionally
            comfortable cars.
          </p>
          <button>
            <Link href="/cars">Choose a Car</Link>
          </button>
          <div className={styles.numbers}>
            <div className={styles.number}>
              <h2>150+</h2>
              <p>
                <span>Cars</span>
                <span>Available</span>
              </p>
            </div>
            <div className={styles.number}>
              <h2>48k</h2>
              <p>
                <span>Happy</span>
                <span>Customers</span>
              </p>
            </div>
            <div className={styles.number}>
              <h2>15</h2>
              <p>
                <span>Year</span>
                <span>Experiences</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
