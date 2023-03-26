import { useState, useRef, useEffect } from 'react';

export const useObserver = (options) => {
    const [showSection, setShowSection] = useState(false);

    const sectionRef = useRef();

    const observer = useRef(new IntersectionObserver(
        (observedEntries, obs) => {
            observedEntries.forEach((entry) => {
                setShowSection(entry.isIntersecting);
            })
        }, options))

    useEffect(() => {
        observer.current.observe(sectionRef.current);
        return () => {
            if (observer.current) observer.current.disconnect();
        }
    }, [sectionRef]);

    return [sectionRef, showSection]
}


