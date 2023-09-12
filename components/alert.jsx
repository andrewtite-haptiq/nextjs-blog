import styles from './alert.module.scss';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx(
        styles.alert,
        type === 'success' && styles.success,
        type === 'error' && styles.error
      )}
    >
      {children}
    </div>
  );
}
