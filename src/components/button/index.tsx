import React, { FC } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

type Props = {
    icon?: string;
    children: React.ReactNode;
    onClick: () => void;
    size?: 's' | 'm';
    disabled?: boolean;
};
export const Button: FC<Props> = ({ icon, children, size = 'm', onClick, disabled }) => {
    return (
        <div
            className={classNames(styles.button, styles[size], disabled && styles.disabled)}
            onClick={disabled ? undefined : onClick}
        >
            <div>{children}</div>
            {icon ? <img src={icon} alt="" /> : null}
        </div>
    );
};
