"use client";

import { useEffect, useState, useCallback } from "react";

const BackToTop: React.FC = (): JSX.Element | null => {
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    const onScroll = useCallback(() => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    }, [hasScrolled]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [onScroll]);

    return (
        <>
            {hasScrolled && (
                <a className={`goTop-btn ${hasScrolled && "d-block"}`} href="#top">
                    <i className="fa-solid fa-angles-up" />
                    <i className="fa-solid fa-angles-up" />
                </a>
            )}
        </>
    );
}
export default BackToTop;