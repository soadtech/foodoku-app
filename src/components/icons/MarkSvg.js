import React from 'react'
import Svg, { Path, G, Circle, Polygon } from "react-native-svg"

export default function SvgMark (props) {
    return (
        <Svg
            viewBox="0 0 22 20"
            style={{
                width: 22,
                height: 20,
            }}
            {...props}
        >
            <G id="App" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="App-01" transform="translate(-88.000000, -199.000000)">
                    <G id="mark" transform="translate(88.000000, 199.000000)">
                        <Circle id="Oval" fill="#3CA635" cx="7.5" cy="7.5" r="7.5"></Circle>
                        <G id="checkmark" transform="translate(3.000000, 4.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <Polygon id="Path" points="8.4375 0 3.75 4.6875 1.5625 2.5 0 4.0625 3.75 7.8125 10 1.5625"></Polygon>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}
