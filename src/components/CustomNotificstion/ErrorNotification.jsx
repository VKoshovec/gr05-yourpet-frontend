import { notification } from 'antd';
import { useEffect } from 'react';


const ErrorNotification = ({error}) => {

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Error!!!',
      description:
        error,
    });
  };


  useEffect(() => {
openNotificationWithIcon('error')
}, [])

  return ( <>
    {contextHolder}
    </>
  )
}

export default ErrorNotification
