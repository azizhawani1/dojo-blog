import { Container } from "./StyledAnimation";
import zunkzoomap from "../Zoo_Map_full.png";
import zunkmore from "../Mount_zunkmore_1.png";
import { useState, useEffect } from "react";

const Animation = () => {


    const [position, setPosition] = useState({
        x: '',
        y: '',
    });

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        })
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
        }
    }, [])


    return (
        <Container>
            <a href="https://rewards.zunkz.com/marketplace">
                Link to follow
            </a>
            <span>
                <img width ="100%" src={zunkzoomap} alt="Zoo map" />
            </span>
            <div className='img-cont'>
                <img src={zunkmore} alt="Zunk more" />
            </div>

            <div style={{ left: `${position.x}px`, top: `${position.y}px` }} className="cursor"></div>
        </Container>
    );
}

export default Animation;