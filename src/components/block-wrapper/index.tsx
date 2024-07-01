import styles from './index.module.css';
interface Props {
    children: React.ReactNode;
    className?: string;
}
export const BlockWrapper = ({ children, className }: Props) => {
    return <div className={`${styles.blockWrapper} ${className || ''}`}>{children}</div>;
};
