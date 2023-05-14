import { useParams } from 'react-router-dom';
import { getNoticesByCategory } from '../../../api/notices';
import { useEffect, useState } from 'react';


const NoticesCategoriesList = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);

  const { category } = useParams();

  console.log(category);

  useEffect(() => {
    if (!category) {
      return;
    }

    const fetchNotices = async () => {
      try {
        setLoading(true);
        const data = await getNoticesByCategory(category);
        if (!data.length) {
          setMessage(true);
          return;
        }
        console.log('data', data);
        setItems(data);
        setMessage(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, [category]);


  console.log(items);

  return ( <h1>Noties categories {category} </h1>)
};

export default NoticesCategoriesList;
