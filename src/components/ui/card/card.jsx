import React from 'react'

import styles from './card.module.css'
import Link from '../../link/link'

const Card = ({ imgSrc, imgAlt, Hero, title, link, details }) => {
  const image =
    typeof imgSrc === 'string' ? (
      <img src={imgSrc} className={styles.cardHeroImage} alt={imgAlt} />
    ) : (
      <Hero className={styles.cardHeroImage} />
    )

  return (
    <div className={styles.featuredEventCard}>
      <div className={styles.cardHero}>{image}</div>
      <div className={styles.cardDetails}>
        <div className={styles.cardTitle}>{title}</div>
        <ul className={styles.details}>
          {details.map(detail => (
            <li className={styles.detailsItem}>{detail}</li>
          ))}
        </ul>
        <Link external to={link} classes={styles.moreLink}>
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default Card
