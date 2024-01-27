import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

export default function List(){
    const[isMoved, setIsMovwed] = useState(false);
    const[slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction)=>{
        setIsMovwed(true)
        let distance = listRef.current.getBoundingClientRect().x-50;
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && slideNumber < 3){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Contine to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                className="sliderArrow left" 
                onClick={()=>handleClick("left")}
                style = {{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0}></ListItem>
                    <ListItem index={1}></ListItem>
                    <ListItem index={2}></ListItem>
                    <ListItem index={3}></ListItem>
                    <ListItem index={4}></ListItem>
                    <ListItem index={5}></ListItem>
                    <ListItem index={6}></ListItem>
                    <ListItem index={7}></ListItem>
                    <ListItem index={8}></ListItem>
                    <ListItem index={9}></ListItem>  
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}