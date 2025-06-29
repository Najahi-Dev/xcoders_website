import styled from "styled-components";
import { getColorScheme } from '../service';

function FullPageLayout({ className, ...props }) {
    return (
        <FullPageLayoutStyle {...props} className={`container-fluid min-vh-100 px-4 ${className}`}/>

        // If you want gradient color use in class : bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900
    )
}

const FullPageLayoutStyle = styled.div`
    min-height: 100vh;
    background-color: ${getColorScheme().color1.backcolor};
    color: ${getColorScheme().color1.color};
`;

export default FullPageLayout