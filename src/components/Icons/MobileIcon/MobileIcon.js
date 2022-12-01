/**
 * Mobile Dimensions: 183x326
 * Use iPhone SE layout
 */
const MobileIcon = (props) => {
    return (
        <svg width="258" height="512" viewBox="0 0 258 512" fill="none">
            <g id="MobileIcon 1">
                <path id="Vector" d="M221.143 0.232727L36.8571 0C16.5857 0 0 20.9455 0 46.5455V465.455C0 491.055
                16.5857 512 36.8571 512H221.143C241.414 512 258 491.055 258 465.455V46.5455C258 20.9455 241.414
                0.232727 221.143 0.232727ZM221.143 418.909H36.8571V93.0909H221.143V418.909Z" fill="#fff"/>
                <rect id="google-m 1" x="37" y="92" width="183" height="326" fill="url(#pattern1)"/>
            </g>
            <defs>
                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1_2" transform="translate(-0.00325137) scale(0.00222678 0.00125)"/>
                </pattern>
                <image id="image0_1_2" data-name="google-m.png" width="452" height="800"
                       xlinkHref={props.mobileImages && props?.mobileImages[0]}/>
            </defs>
        </svg>

    )
}
export default MobileIcon