import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './index.module.css';

type Props = {
    icon?: string;
    children: React.ReactNode;
    onClick?: () => void;
    size?: 's' | 'm';
    disabled?: boolean;
    type?: 'default' | 'text';
    className?: string;
    href?: string;
};
export const Button: FC<Props> = ({
    icon,
    children,
    size = 'm',
    onClick,
    disabled,
    type = 'default',
    className,
    href,
}) => {
    if (href) {
        return (
            <a
                className={classNames(
                    styles.button,
                    styles[size],
                    styles[type],
                    disabled && styles.disabled,
                    className
                )}
                href={href}
            >
                <div>{children}</div>
                {icon ? <img src={icon} alt="" /> : null}
            </a>
        );
    }
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
