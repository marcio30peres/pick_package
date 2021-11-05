import { PostmanStyle } from "./styles";
import postmanImg from '../../img/postman.png'
import { useEffect, useState } from "react";

interface KeyUpEvent {
    keyCode: number
}

export function Postman() {
    const maxStepsX = Math.floor(window.innerWidth/64)-1
    const maxStepsY = Math.floor(window.innerHeight/64)-1
    const [posX, setPosX] = useState(1)
    const [posY, setPosY] = useState(1)

    useEffect(() => {
        window.addEventListener('keydown', postmanStep);
        return () => {
            window.removeEventListener('keydown', postmanStep);
        };
    }, [posX, posY]);
    
    function postmanStep (event: KeyUpEvent) {
        switch (event.keyCode) {
            case 37:
                if(posX > 1) {
                    setPosX(posX - 1)
                }
                break
            case 39:
                if(posX < maxStepsX - 1){
                    setPosX(posX + 1)
                }
                break
            case 38:
                if(posY > 1){
                    setPosY(posY - 1)
                }
                break
            case 40:
                if(posY < maxStepsY - 1){
                    setPosY(posY + 1)
                }
                break
        }
    }
    
    return (
        <PostmanStyle 
            posX={posX}
            posY={posY}
        >
            <img src={postmanImg} />
        </PostmanStyle>
    )
}