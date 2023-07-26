"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Background from "@/components/background/background";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { FaUser } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { RiPinterestFill, RiInstagramLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const replies = [
  {
    id: 1,
    name: "Merrill Rayos",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 2,
    name: "Lyndon Pocekays",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    name: "Aleen Crigger",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 4,
    name: "Jackqueline Sprang",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 5,
    name: "Sanford Crowley",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const NewsDetail = () => {
  const commentId = uuid();
  const [comments, setComments] = useState(replies);
  const [commentData, setCommentData] = useState({
    commentName: "",
    commentEmail: "",
    commentMessage: "",
  });

  const { commentName, commentEmail, commentMessage } = commentData;

  const onChange = (e) => {
    setCommentData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: commentId,
      name: commentName,
      text: commentMessage,
    };

    setComments([...comments, newComment]);

    setCommentData({
      commentName: "",
      commentEmail: "",
      commentMessage: "",
    });
  };

  return (
    <div className={styles.newsDetail}>
      <Background header="Enjoy Best Travel Experience" />
      <div className={styles.newsDetailWrap}>
        <div className={styles.newsDetailMain}>
          <div className={styles.newsDetailMainSec}>
            <div className={styles.imgBx}>
              <Image
                src="/assets/hero.jpeg"
                fill={true}
                alt=""
                className="img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className={styles.textBx}>
              Quis sunt quis do laboris eiusmod in sint dolore sit pariatur
              consequat commodo aliqua nulla ad dolor aliquip incididunt
              voluptate est aliquip adipisicing ea cupidatat nostrud incididunt
              aliquip dolore. Sed minim nisi duis laborum est labore nisi amet
              elit adipisicing proident do consectetur dolor labore sit nisi ad
              proident esse ad velit nisi irure reprehenderit ut et dolor labore
              veniam quis.
              <br />
              <br />
              Sunt duis laboris ex et quis laborum laborum cillum mollit
              voluptate culpa consequat ex cupidatat dolor eiusmod proident
              proident cillum pariatur sint adipisicing in nostrud do dolore
              consectetur quis incididunt minim consectetur. Exercitation elit
              proident dolor est id eiusmod dolor dolor incididunt ad voluptate
              laboris cupidatat est est sint veniam sint officia sint incididunt
              est sit ut tempor commodo pariatur ut proident et do.
              <br />
              <br />
              Sed eu in ut sint dolor irure fugiat minim veniam sed ea proident
              ullamco occaecat irure ut velit eu ullamco fugiat cupidatat dolore
              fugiat. Lorem ipsum id non deserunt id consequat duis voluptate
              amet aliqua pariatur laboris officia pariatur veniam velit
              reprehenderit sint nostrud cupidatat magna eiusmod mollit
              exercitation pariatur nulla minim laboris dolore aliqua
              consectetur cillum duis aute consectetur.
            </div>
          </div>
          {comments.length > 0 && (
            <div className={styles.newsDetailCommentSec}>
              <h2>Comments ({comments.length})</h2>
              <div className={styles.comments}>
                {comments.map((comment) => {
                  const { id, name, text } = comment;

                  return (
                    <div className={styles.comment} key={id}>
                      <span className={styles.photo}>
                        <FaUser />
                      </span>
                      <div className={styles.info}>
                        <h5>{name}</h5>
                        <p>{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className={styles.leaveComment}>
            <form onSubmit={onSubmit}>
              <h2>Leave a Comment</h2>
              <input
                type="text"
                name="commentName"
                id="commentName"
                className={styles.input}
                placeholder="Name"
                required
                value={commentName}
                onChange={onChange}
              />
              <input
                type="email"
                name="commentEmail"
                id="commentEmail"
                className={styles.input}
                placeholder="Email"
                required
                value={commentEmail}
                onChange={onChange}
              />
              <textarea
                name="commentMessage"
                id="commentMessage"
                className={styles.textArea}
                placeholder="Message"
                required
                value={commentMessage}
                onChange={onChange}
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
        <div className={styles.newsDetailSide}>
          <div className={styles.share}>
            <div className={styles.header}>
              <h2>Share With Friends</h2>
            </div>
            <div className={styles.socials}>
              <span className={styles.icon}>
                <TiSocialTwitter />
              </span>
              <span className={styles.icon}>
                <TiSocialFacebook />
              </span>
              <span className={styles.icon}>
                <TiSocialLinkedin />
              </span>
              <span className={styles.icon}>
                <RiPinterestFill />
              </span>
              <span className={styles.icon}>
                <RiInstagramLine />
              </span>
            </div>
          </div>
          <div className={styles.recentPosts}>
            <div className={styles.header}>
              <h2>Recent Posts</h2>
            </div>
            <div className={styles.recentPost}>
              <div className={styles.imgBx}>
                <Image
                  src="/assets/recent1.jpeg"
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
              </div>
              <div className={styles.text}>
                <h5>Enjoy Best Travel Experience</h5>
                <p>
                  <span className={styles.dateIcon}>
                    <FaCalendarAlt />
                  </span>
                  <span className={styles.dateText}>July 15, 2023</span>
                </p>
              </div>
            </div>
            <div className={styles.recentPost}>
              <div className={styles.imgBx}>
                <Image
                  src="/assets/recent2.jpeg"
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
              </div>
              <div className={styles.text}>
                <h5>The Future of Car Rent</h5>
                <p>
                  <span className={styles.dateIcon}>
                    <FaCalendarAlt />
                  </span>
                  <span className={styles.dateText}>July 15, 2023</span>
                </p>
              </div>
            </div>
            <div className={styles.recentPost}>
              <div className={styles.imgBx}>
                <Image
                  src="/assets/recent3.jpeg"
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
              </div>
              <div className={styles.text}>
                <h5>Holiday Tips For Backpacker</h5>
                <p>
                  <span className={styles.dateIcon}>
                    <FaCalendarAlt />
                  </span>
                  <span className={styles.dateText}>July 15, 2023</span>
                </p>
              </div>
            </div>
            <div className={styles.recentPost}>
              <div className={styles.imgBx}>
                <Image
                  src="/assets/recent4.jpeg"
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
              </div>
              <div className={styles.text}>
                <h5>Travel Destination For Couple</h5>
                <p>
                  <span className={styles.dateIcon}>
                    <FaCalendarAlt />
                  </span>
                  <span className={styles.dateText}>July 15, 2023</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.header}>
              <h2>About Us</h2>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
