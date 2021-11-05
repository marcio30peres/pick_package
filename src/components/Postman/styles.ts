import styled from "styled-components";

interface PostmanStyleProps {
    posX: number
    posY: number
}

export const PostmanStyle = styled.div<PostmanStyleProps>`
    position: absolute;
    
    width: 4rem;
    height: 4rem;

    left: ${props => props.posX*4}rem;
    top: ${props => props.posY*4}rem;
    
    transition: 200ms;

    > img {
        width: 4rem;
    }
`