import React from 'react';
import classNames from "classnames";
import CheckSvg from '../../assets/svg/check.svg';
import styles from './index.module.css';

interface Props {
    img: string;
    title: string;
    middle: {
        text?: string;
        content?: string;
    };
    button: React.ReactNode;
    className?: string;
    status?: 'primary' | 'default' | 'ghost';

}
export const AssetItemWrapper = ({ img, title, middle, className, button, status = 'default' }: Props) => {
    return (
        <div className={classNames(styles.block, styles[status], className)}>
            <img className={styles.check} src={CheckSvg} alt=""/>
            <img src={img} alt="" />
            <div className={styles.title}>{title}</div>
            {middle.text ? (
                <div className={styles.text}>{middle.text}</div>
            ) : null}
            {middle.content ? (
                <div className={styles.content}>{middle.content}</div>
            ) : null}
            {button}
        </div>
    );
};
