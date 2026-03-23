import styles from "./OurTeam.module.css";
import members from "../../../data/team.json";

interface OurTeamProps {
  compact?: boolean;
}

const OurTeam = ({ compact = false }: OurTeamProps) => {
  return compact ? (
    <div className={styles.contactCard}>
      {members.map((member) => (
        <div key={member.name}>
          <div className={styles.info}>
            <p>{member.name}</p>
            <p>{member.role}</p>
            <a
              href={`tel:${member.phone.replaceAll(" ", "")}`}
              className={styles.phone}
            >
              {member.phone}
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.ourTeam}>
      <h2>Our team</h2>
      <div className={styles.grid}>
        {members.map((member) => (
          <div key={member.name} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.avatar}
            />

            <div className={styles.info}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
