import { useSelector } from 'react-redux';

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
  marginBottom: 10,
};

export function Notification() {
  const notifications = useSelector((state) => state.notifications);

  if (notifications.length === 0) {
    return null;
  }

  return notifications.map((notification) => (
    <div key={notification.id} style={style}>
      {notification.message}
    </div>
  ));
}
