import CardTitle from './CardTitle/CardTitle';
import CardImg from './CardImg/CardImg';
import TimeItem from './TimeItem/TimeItem';
import AddressItem from './Address/AddressItem';
import EmailItem from './EmailItem/EmailItem';
import PhoneItem from './PhoneItem/PhoneItem';

import styles from './CardItem.module.scss';

const CardItem = ({ items }) => {
  const friends = items.map(
    ({
      _id,
      title,
      url,
      addressUrl,
      address,
      imageUrl,
      workDays,
      phone,
      email,
    }) => (
      <li key={_id} className={styles.item}>
        <div className={styles.card}>
          {/* Card Title */}
          <CardTitle title={title} url={url} />
          <div className={styles.content}>
            {/* Card Images */}
            <CardImg imageUrl={imageUrl} title={title} />
            <ul className={styles.infoList}>
              {/* Time Component */}

              <TimeItem text={'Time'} workDays={workDays ? workDays : []} />
              {/* Address Component */}
              <AddressItem
                text={'Address'}
                address={address}
                addressUrl={addressUrl}
              />
              {/* Email Components */}
              <EmailItem text={'Email'} email={email} />
              {/* Phone Components */}
              <PhoneItem text={'Phone'} phone={phone} />
            </ul>
          </div>
        </div>
      </li>
    )
  );

  return <ul className={styles.friendList}>{friends}</ul>;
};

export default CardItem;
