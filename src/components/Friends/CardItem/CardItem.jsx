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
          <CardTitle title={title} url={url} />
          <div className={styles.content}>
            <CardImg imageUrl={imageUrl} title={title} />
            <ul className={styles.infoList}>
              <TimeItem text={'Time'} workDays={workDays ? workDays : []} />

              <AddressItem
                text={'Address'}
                address={address}
                addressUrl={addressUrl}
              />

              <EmailItem text={'Email'} email={email} />

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
