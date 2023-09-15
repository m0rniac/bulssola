"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Pull.module.css';

function PullImage() {
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.pullImageContainer}>
            <div className={styles.imageWrapper}>
                {showImage && (
                    <Link href={'/projects/torogos'}>
                        <Image
                            src="/images/posts/torogos/Logo_02.png"
                            alt="TorogOS | m0rniac"
                            width={140}
                            height={140}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PullImage;
