import React, { FC } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

type Props = {
    icon?: string;
    children: React.ReactNode;
    onClick: () => void;
    size?: 's' | 'm';
    disabled?: boolean;
    type?: 'default' | 'text';
    className?: string;
};
export const Button: FC<Props> = ({ icon, children, size = 'm', onClick, disabled, type = 'default', className }) => {
    return (
        <div
            className={classNames(styles.button, styles[size], styles[type], disabled && styles.disabled, className)}
            onClick={disabled ? undefined : onClick}
        >
            <div>{children}</div>
            {icon ? <img src={icon} alt="" /> : null}
        </div>
    );
};
