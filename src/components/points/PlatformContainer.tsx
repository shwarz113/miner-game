import React from 'react';
import platform from "src/assets/svg/platform/platform.svg";
import styles from './platform.module.css';
import { EPlatformItems, getIconPlatformByLevel } from "src/components/points/utils";
import classNames from "classnames";

type Props = {
    // hotelLevel: number;
    // carLevel: number;
    // objectLevel: number;
    // additionalObjectLevel: number;
};

export const PlatformContainer = ({}: Props) => {
    const isDisabled = false;

    return (
        <div className={styles.container}>
            {/* platform */}
            <img src={platform} className={styles.platform} alt='platform' />

            {/* hotel */}
            <img
                src={getIconPlatformByLevel(1, EPlatformItems.Hotel)}
                className={classNames(styles.hotel, isDisabled && styles.disabledItem)}
                alt='hotel'
            />

            {/* car */}
            <img
                src={getIconPlatformByLevel(1, EPlatformItems.Car)}
                className={classNames(styles.car, isDisabled && styles.disabledItem)}
                alt='car'
            />

            {/* object */}
            <img
                src={getIconPlatformByLevel(1, EPlatformItems.Object)}
                className={classNames(styles.object, isDisabled && styles.disabledItem)}
                alt='object'
            />

            {/* additional object */}
            <img
                src={getIconPlatformByLevel(2, EPlatformItems.Hotel)}
                className={classNames(styles.object, isDisabled && styles.disabledItem)}
                alt='additional object'
            />
        </div>
    );
};
