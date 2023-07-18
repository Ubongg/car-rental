"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Car from "@/components/car/Car";
import { BsTrophyFill } from "react-icons/bs";
import { ImRoad } from "react-icons/im";
import { FaMapPin } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [luxury, setLuxury] = useState(true);
  const [comfort, setComfort] = useState(false);
  const [prestige, setPrestige] = useState(false);

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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
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
            </div>
          </div>
        </div>
        <div className={styles.explore}>
          <div className={styles.exploreWrap}>
            <h2>Explore the world with comfortable car</h2>
            <div className={styles.offers}>
              <div className={styles.offer}>
                <div className={styles.icon}>
                  <BsTrophyFill />
                </div>
                <h5>First Class Services</h5>
                <p>
                  Where luxury meets exceptional care, creating unforgettable
                  moments and exceeding your every expectation.
                </p>
              </div>
              <div className={styles.offer}>
                <div className={styles.icon}>
                  <ImRoad />
                </div>
                <h5>24/7 road assistance</h5>
                <p>
                  Reliable support when you need it most, keeping you on the
                  move with confidence and peace of mind.
                </p>
              </div>
              <div className={styles.offer}>
                <div className={styles.icon}>
                  <FaMapPin />
                </div>
                <h5>Free Pick-Up & Drop-Off</h5>
                <p>
                  Enjoy free pickup and drop-off services, adding an extra layer
                  of ease to your car rental experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quality}>
          <div className={styles.qualityImg}></div>
          <div className={styles.qualityWrap}>
            <h2>Only Quality For Clients</h2>
            <div className={styles.qualities}>
              <div className={styles.singleQuality}>
                <button
                  className={
                    luxury ? styles.luxuryButton : styles.luxuryButtonHide
                  }
                  onClick={() => {
                    setLuxury(true);
                    setComfort(false);
                    setPrestige(false);
                  }}
                >
                  LUXURY
                </button>
                <button
                  className={
                    comfort ? styles.comfortButton : styles.comfortButtonHide
                  }
                  onClick={() => {
                    setLuxury(false);
                    setComfort(true);
                    setPrestige(false);
                  }}
                >
                  COMFORT
                </button>
                <button
                  className={
                    prestige ? styles.prestigeButton : styles.prestigeButtonHide
                  }
                  onClick={() => {
                    setLuxury(false);
                    setComfort(false);
                    setPrestige(true);
                  }}
                >
                  PRESTIGE
                </button>
              </div>
              <p className={luxury ? styles.luxury : styles.luxuryHide}>
                We offer a meticulously curated collection of the most
                sought-after luxury vehicles on the market. Whether you prefer
                the sporty allure of a high-performance sports car, the
                sophistication of a sleek and luxurious sedan, or the
                versatility of a premium SUV, we have the perfect car to match
                your discerning taste.
              </p>
              <p className={comfort ? styles.comfort : styles.comfortHide}>
                We prioritize your comfort and convenience throughout your
                journey. We understand that a comfortable ride can make a world
                of difference, whether you're embarking on a business trip or
                enjoying a leisurely vacation. That's why we offer a wide range
                of well-maintained, comfortable cars that cater to your specific
                needs.
              </p>
              <p className={prestige ? styles.prestige : styles.prestigeHide}>
                We understand that prestige goes beyond luxury. It's about
                making a statement, embracing sophistication, and indulging in
                the finer things in life. That's why we offer an exclusive
                selection of prestigious cars that exude elegance, style, and
                status.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.latest}>
          <div className={styles.latestWrap}>
            <div className={styles.newsHeader}>
              <h2>Latest News</h2>
              <p>
                Breaking news, fresh perspectives, and in-depth coverage - stay
                ahead with our latest news, insights, and analysis.
              </p>
            </div>
            <div className={styles.newsList}>
              <div className={styles.news}>
                <div
                  className={styles.newsImg}
                  style={{
                    background: 'url("/assets/news1.jpeg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <p>
                    <span>10</span>
                    <br />
                    MAR
                  </p>
                </div>
                <div className={styles.newsText}>
                  <h5>Enjoy Best Travel Experience</h5>
                  <p>
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <button>
                    <Link href="/news/1">Read More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.news}>
                <div
                  className={styles.newsImg}
                  style={{
                    background: 'url("/assets/news2.jpeg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <p>
                    <span>12</span>
                    <br />
                    MAR
                  </p>
                </div>
                <div className={styles.newsText}>
                  <h5>The Future of Car Rent Here</h5>
                  <p>
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <button>
                    <Link href="/news/1">Read More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.news}>
                <div
                  className={styles.newsImg}
                  style={{
                    background: 'url("/assets/news3.jpeg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <p>
                    <span>14</span>
                    <br />
                    MAR
                  </p>
                </div>
                <div className={styles.newsText}>
                  <h5>Holiday Tips For Backpacker</h5>
                  <p>
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <button>
                    <Link href="/news/1">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeContact}>
          <div className={styles.homeContactWrap}>
            <h2>
              Call us for further information. Yubo Rentals customer care is
              here to help you anytime.
            </h2>
            <button>
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
