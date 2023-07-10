import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Car from "@/components/car/Car";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.heroWrap}>
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
                We are the <span>largest</span> leading commercial and luxury
                cars rental.
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
        <div className={styles.fleets}>
          <div className={styles.fleetsWrap}>
            <div className={styles.header}>
              <h2>Our Vehicle Fleet</h2>
              <p>
                Driving your dreams to reality with an exquisite fleet of
                versatile vehicles for unforgettable journeys.
              </p>
            </div>
            <div className={styles.fleet}>
              <Car
                body="SUV"
                name="Jeep Renegade"
                img="/assets/car1.jpeg"
                price="$152"
              />
              <Car
                body="Sedan"
                name="BMW M5"
                img="/assets/car12.jpeg"
                price="$159"
              />
              <Car
                body="Exotic Car"
                name="Ferarri Enzo"
                img="/assets/car3.jpeg"
                price="$545"
              />
              <Car
                body="Pickup Truck"
                name="Ford Raptor"
                img="/assets/car4.jpeg"
                price="$144"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
