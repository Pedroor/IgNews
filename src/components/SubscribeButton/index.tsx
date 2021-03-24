import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: number;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
