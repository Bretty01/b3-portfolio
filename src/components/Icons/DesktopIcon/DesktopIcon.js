const DesktopIcon = (props) => {
    /**
     * For reference, images MUST be resized to following dimensions:
     * -Desktop: width: 340px, height: 214px
     */
    return (
        <svg width="512" height="512" viewBox="0 0 512 512">
            <g id="DesktopIcon">
                <g id="DesktopIcon_2">
                    <path id="Vector" d="M426.666 384C450.134 384 469.334 364.8 469.334 341.334V128C469.334 104.533 450.134 85.3334 426.666 85.3334H85.3334C61.8666 85.3334 42.6666 104.533 42.6666 128V341.334C42.6666 364.8 61.8666 384 85.3334 384H0V426.666H512V384H426.666ZM85.3334 128H426.666V341.334H85.3334V128Z" fill="white"/>
                    <rect id="desktop-image" x="86" y="128" width="340" height="214" fill="url(#pattern0)"/>
                </g>
            </g>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_4_6" transform="scale(0.00294118 0.0046729)"/>
                </pattern>
                <image id="image0_4_6" data-name="google-d.png" width="340" height="214" xlinkHref={props.desktopImages[0]} />
            </defs>
        </svg>


    )
}
export default DesktopIcon