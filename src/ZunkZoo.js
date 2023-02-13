import { useState, useEffect, useRef } from 'react';
import ImagesData from './Data/ImagesData';
    
const ZunkZoo = () => {

    const initzunkimage = {
        id: ImagesData[0].id,
        name: ImagesData[0].name,
        srcimg: ImagesData[0].srcimg,
        hoverimg: ImagesData[0].hoverimg,
        link: ImagesData[0].link,
        alt: ImagesData[0].alt,
        coordinatesCM: ImagesData[0].coordinatesCM,
        coordinatesPX: ImagesData[0].coordinatesPX,
        width: ImagesData[0].width,
        height: ImagesData[0].height,
    };


    const [zunkimage, setZunkimage] = useState(initzunkimage);

    // THis ref will be connected to the orange box
    const boxRef = useRef();

    // X
    const [x, setX] = useState();

    // Y
    const [y, setY] = useState();

    //W
    const [w, setW] = useState();


    // This function calculate X and Y
    const getPosition = () => {
        const x = boxRef.current.offsetLeft;
        setX(x);

        const y = boxRef.current.offsetTop;
        setY(y);

        const w = boxRef.current.offsetWidth;
        setW(w);
    };

    // Get the position of the red box in the beginning
    useEffect(() => {
        getPosition();
    }, []);

    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
        window.addEventListener("resize", getPosition);
        return () => {
            window.removeEventListener('resize', getPosition);
        }
    }, []);

    const handleMouseEnter = (imgobj, e) => {
        setZunkimage({
            name: imgobj.name,
            srcimg: imgobj.srcimg,
            hoverimg: imgobj.hoverimg,
            link: imgobj.link,
            alt: imgobj.alt,
            coordinatesCM: imgobj.coordinatesCM,
            coordinatesPX: imgobj.coordinatesPX,
            width: imgobj.width,
            height: imgobj.height,
        }
        );
    }

    const handleMouseOut = (e) => {
        setZunkimage(initzunkimage);
    }


	return (
        <div className="zunk-zoo">
            <h2>Zunk Zoo</h2>
            <div ref={boxRef}>
                <div style={{ position: "absolute", width: `${w}px`, top: `${y}px`, left: `${x}px` }}><img className="zoo-img" src={zunkimage.hoverimg} alt={zunkimage.alt} /></div>
            </div>
            <div>
                {ImagesData.filter(elem => elem.id !== 1).map((elem) => (
                    <a
                        key={elem.id}
                        style={
                        {
                            position: "absolute", width: `${elem.width * w / ImagesData[0].width}px`,
                            top: `${y + elem.coordinatesPX.y * w / ImagesData[0].width}px`,
                            left: `${x + elem.coordinatesPX.x * w / ImagesData[0].width}px`,
                            opacity: "0",
                        }}
                        onMouseEnter={(e) => handleMouseEnter(elem, e)}
                        onMouseLeave={handleMouseOut}
                        href={elem.link}>
                        <img className="zoo-img" height={(elem.height * w / ImagesData[0].width).toString()} src={elem.srcimg} alt={elem.alt} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ZunkZoo;