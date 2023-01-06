import { createGlobalStyle } from "styled-components";

// Helvetica Light
import Helvetica_LightWoff2 from "../../Assets/Fonts/Helvetica/Helvetica-Light.woff2";
import Helvetica_LightWoff from "../../Assets/Fonts/Helvetica/Helvetica-Light.woff";
import Helvetica_LightTtf from "../../Assets/Fonts/Helvetica/Helvetica-Light.ttf";
import Helvetica_LightObliqueWoff2 from "../../Assets/Fonts/Helvetica/Helvetica-LightOblique.woff2";
import Helvetica_LightObliqueWoff from "../../Assets/Fonts/Helvetica/Helvetica-LightOblique.woff";
import Helvetica_LightObliqueTtf from "../../Assets/Fonts/Helvetica/Helvetica-LightOblique.ttf";

// Helvetica Regular
import Helvetica_RegularWoff2 from "../../Assets/Fonts/Helvetica/Helvetica.woff2";
import Helvetica_RegularWoff from "../../Assets/Fonts/Helvetica/Helvetica.woff";
import Helvetica_RegularTtf from "../../Assets/Fonts/Helvetica/Helvetica.ttf";
import Helvetica_RegularObliqueWoff2 from "../../Assets/Fonts/Helvetica/Helvetica-Oblique.woff2";
import Helvetica_RegularObliqueWoff from "../../Assets/Fonts/Helvetica/Helvetica-Oblique.woff";
import Helvetica_RegularObliqueTtf from "../../Assets/Fonts/Helvetica/Helvetica-Oblique.ttf";

// Helvetica Bold
import Helvetica_BoldWoff2 from "../../Assets/Fonts/Helvetica/Helvetica-Bold.woff2";
import Helvetica_BoldWoff from "../../Assets/Fonts/Helvetica/Helvetica-Bold.woff";
import Helvetica_BoldTtf from "../../Assets/Fonts/Helvetica/Helvetica-Bold.ttf";
import Helvetica_BoldObliqueWoff2 from "../../Assets/Fonts/Helvetica/Helvetica-BoldOblique.woff2";
import Helvetica_BoldObliqueWoff from "../../Assets/Fonts/Helvetica/Helvetica-BoldOblique.woff";
import Helvetica_BoldObliqueTtf from "../../Assets/Fonts/Helvetica/Helvetica-BoldOblique.ttf";

// Helvetica Neue
import Helvetica_NeueWoff2 from "../../Assets/Fonts/Helvetica/HelveticaNeueLT.woff2";
import Helvetica_NeueWoff from "../../Assets/Fonts/Helvetica/HelveticaNeueLT.woff";
import Helvetica_NeueTtf from "../../Assets/Fonts/Helvetica/HelveticaNeueLT.ttf";

// FiraGo Bold
import FiraGo_BoldWoff2 from "../../Assets/Fonts/FiraGo/FiraGO-Bold.woff2";

const Fonts = createGlobalStyle`

@font-face {
    font-family: 'FiraGo';
    src: url(${FiraGo_BoldWoff2}) format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Helvetica Neue';
    src: url(${Helvetica_NeueWoff2}) format('woff2'),
        url(${Helvetica_NeueWoff}) format('woff'),
        url(${Helvetica_NeueTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_RegularWoff2}) format('woff2'),
        url(${Helvetica_RegularWoff}) format('woff'),
        url(${Helvetica_RegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_BoldWoff2}) format('woff2'),
        url(${Helvetica_BoldWoff}) format('woff'),
        url(${Helvetica_BoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_BoldObliqueWoff2}) format('woff2'),
        url(${Helvetica_BoldObliqueWoff}) format('woff'),
        url(${Helvetica_BoldObliqueTtf}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_LightWoff2}) format('woff2'),
        url(${Helvetica_LightWoff}) format('woff'),
        url(${Helvetica_LightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_LightObliqueWoff2}) format('woff2'),
        url(${Helvetica_LightObliqueWoff}) format('woff'),
        url(${Helvetica_LightObliqueTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica';
    src: url(${Helvetica_RegularObliqueWoff2}) format('woff2'),
        url(${Helvetica_RegularObliqueWoff}) format('woff'),
        url(${Helvetica_RegularObliqueTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}


`;
export default Fonts;
