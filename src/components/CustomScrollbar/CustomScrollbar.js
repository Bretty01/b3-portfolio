import React, {useState, useCallback, useEffect, useRef} from "react";
import "./CustomScrollbar.scss";

const SCROLL_BOX_MIN_HEIGHT = 20;

export default function CustomScrollbar({children, className, ...restProps}) {
    /* State variables */
    const [hovering, setHovering] = useState(false);
    const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
    const [scrollBoxTop, setScrollBoxTop] = useState(0);
    const [isDragging, setDragging] = useState(false)
    const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0)

    /* Ref variables */
    const scrollHostRef = useRef()

    const handleMouseOver = useCallback(() => {
        !hovering && setHovering(true);
    }, [hovering]);

    const handleScroll = useCallback(() => {
        if (!scrollHostRef) {
            return;
        }
        const scrollHostElement = scrollHostRef.current;
        const {top} = scrollHostElement.getBoundingClientRect()
        let absTop = Math.abs(top)
        const {scrollHeight} = scrollHostElement;
        //Get a percentage distace of the height the scrollbar is supposed to be and multiply it by the contained box
        //  (in this case the height of the window) to get the actual distance the scrollbar is supposed to be.
        let newTop =
            (parseInt(absTop, 10) / parseInt(scrollHeight, 10)) * window.innerHeight;
        newTop = Math.min(newTop, window.innerHeight - scrollBoxHeight);
        setScrollBoxTop(newTop);
    }, []);

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
                const {scrollHeight} = scrollHostElement;
                //Based on the difference in position of the thumb currently and where it was before (deltaY),
                //  determine how much to move the thumb based on that distance.
                let deltaY = e.clientY - lastScrollThumbPosition;
                let newScrollHostTop = (scrollHeight / window.innerHeight) * deltaY;

                setScrollThumbPosition(e.clientY);
                setScrollBoxTop(
                    Math.min(
                        Math.max(0, scrollBoxTop + deltaY),
                        window.innerHeight - scrollBoxHeight
                    )
                )
                //The scrolling behavior MUST NOT be smooth, otherwise it completely messes with the scrolling on the
                // scrollbar. React for some reason has scroll-behavior set to 'smooth' by default.
                window.scroll({
                    top: Math.min(Math.abs(scrollHostRect.top - newScrollHostTop), scrollHeight - window.innerHeight),
                    left: 0,
                    behavior: 'auto'
                })
            }
        },
        [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
    );

    /**
     * Function: resetScrollbar
     * Purpose: If the window has been adjusted in some way, the scrollbar distance needs to be recalculated to the new
     * website Y distance.
     */
    const resetScrollbar = () => {
        const scrollHostElement = scrollHostRef.current;
        const {scrollHeight} = scrollHostElement;
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
            onMouseLeave={e => handleMouseUp(e)}
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
            <div className={"scroll-bar"} style={{opacity: restProps.showContent ? (hovering ? 0.8 : 0) : 0}}>
                <div
                    className={"scroll-thumb"}
                    style={{height: scrollBoxHeight, top: scrollBoxTop}}
                    onMouseDown={e => handleScrollThumbMouseDown(e)}
                />
            </div>
        </div>
    );
}