import styled from "styled-components";
import { getColorScheme } from '../service';

function FullPageLayout({ className, ...props }) {
    return (
        <FullPageLayoutStyle {...props} className={`container-fluid min-vh-100 ${className}`}/>
    )
}

const FullPageLayoutStyle = styled.div`
    min-height: 100vh;
    background-color: ${getColorScheme().color1.backcolor};
    color: ${getColorScheme().color1.color};
`;

export default FullPageLayout