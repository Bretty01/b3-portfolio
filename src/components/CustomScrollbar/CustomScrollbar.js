import React, { useState, useCallback, useEffect, useRef } from "react";
import "./CustomScrollbar.scss";

const SCROLL_BOX_MIN_HEIGHT = 20;

export default function CustomScrollbar({ children, className, ...restProps }) {
    const [hovering, setHovering] = useState(false);
    const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
    const [scrollBoxTop, setScrollBoxTop] = useState(0);
    const [isDragging, setDragging] = useState(false)
    const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0)
    //useEffect(() => console.log(scrollBoxTop), [scrollBoxTop])

    const handleMouseOver = useCallback(() => {
        !hovering && setHovering(true);
    }, [hovering]);

    const handleMouseOut = useCallback(() => {
        !!hovering && setHovering(false);
    }, [hovering]);

    const handleScroll = useCallback(() => {
        if (!scrollHostRef) {
            return;
        }
        const scrollHostElement = scrollHostRef.current;
        const {top} = scrollHostElement.getBoundingClientRect()
        let absTop = Math.abs(top)
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

        let newTop =
            (parseInt(absTop, 10) / parseInt(scrollHeight, 10)) * window.innerHeight;
        newTop = Math.min(newTop, window.innerHeight - scrollBoxHeight);
        setScrollBoxTop(newTop);
    }, []);

    const scrollHostRef = useRef();

    const handleScrollThumbMouseDown = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        setScrollThumbPosition(e.clientY);
        setDragging(true);
    }, []);

    const handleMouseUp = e => {
        if (isDragging) {
            e.preventDefault();
            setDragging(false)
        }
    };

    const handleDocumentMouseMove = useCallback(
        e => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
                const scrollHostElement = scrollHostRef.current;
                const scrollHostRect = scrollHostElement.getBoundingClientRect()
                const { scrollHeight } = scrollHostElement;
                let deltaY = e.clientY - lastScrollThumbPosition;
                console.log(scrollHeight + " / " + window.innerHeight + " * " + deltaY + " =  " + (scrollHeight / window.innerHeight) * deltaY)
                let newScrollHostTop = (scrollHeight / window.innerHeight) * deltaY;

                setScrollThumbPosition(e.clientY);
                setScrollBoxTop(
                    Math.min(
                        Math.max(0, scrollBoxTop + deltaY),
                        window.innerHeight - scrollBoxHeight
                    )
                );
                console.log(scrollHostRect.top + ", " + window.scrollY)
                console.log(Math.abs(scrollHostRect.top - newScrollHostTop))
                window.scroll({
                    top: Math.min(Math.abs(scrollHostRect.top - newScrollHostTop), scrollHeight - window.innerHeight),
                    left: 0,
                    behavior: 'auto'
                })
            }
        },
        [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
    );

    const resetScrollbar = () => {
        const scrollHostElement = scrollHostRef.current;
        const { clientHeight, scrollHeight } = scrollHostElement;
        const scrollBoxPercentage = window.innerHeight / scrollHeight;
        const scrollbarHeight = Math.max(
            scrollBoxPercentage * window.innerHeight,
            SCROLL_BOX_MIN_HEIGHT
        );
        setScrollBoxHeight(scrollbarHeight);
    }

    useEffect(() => {
        resetScrollbar()
        window.addEventListener("resize", resetScrollbar, true)
        window.addEventListener("scroll", handleScroll, true);
        return function cleanup() {
            window.removeEventListener("resize", resetScrollbar, true)
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, [restProps.showContent]);




    return (
        <div
            className={"scrollhost-container"}
            onMouseOver={handleMouseOver}
            onMouseLeave={e =>handleMouseUp(e)}
            onMouseUp={e => handleMouseUp(e)}
            onMouseMove={e => handleDocumentMouseMove(e)}
        >
            <div
                ref={scrollHostRef}
                className={`scrollhost ${className}`}
                {...restProps}
            >
                {children}
            </div>
            <div className={"scroll-bar"} style={{ opacity: restProps.showContent ? (hovering ? 0.8 : 0) : 0 }}>
                <div
                    className={"scroll-thumb"}
                    style={{ height: scrollBoxHeight, top: scrollBoxTop }}
                    onMouseDown={e => handleScrollThumbMouseDown(e)}
                />
            </div>
        </div>
    );
}