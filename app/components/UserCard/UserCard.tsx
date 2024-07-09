import Image from "next/image";
import styles from "./UserCard.module.css";

interface UserCardProps {
  userSrc: string;
  name: string;
  profession: string;
}

const UserCard: React.FC<UserCardProps> = ({ userSrc, name, profession }) => {
  return (
    <div className={styles.container}>
      {/* image */}
      <div className={styles.imgContainer}>
        <Image src={userSrc} alt="user-cover" className={styles.img} fill />
      </div>

      {/* text */}
      <div className={styles.textContainer}>
        <h5 className={styles.name}>{name}</h5>
        <p className={styles.profession}>{profession}</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image
              src="/assets/facebook.svg"
              alt="facebook-icon"
              height={24}
              width={24}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src="/assets/instagram.svg"
              alt="facebook-icon"
              height={24}
              width={24}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src="/assets/twitter.svg"
              alt="facebook-icon"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
