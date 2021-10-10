import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebaseConfig'
function Detail() {
    const {id}=useParams();
    const [movieData, setmovieData] = useState()
    useEffect(() => {
        db.ref().child("disney").child("movies").child(id).once("value",(snapshot)=>{
            if(snapshot.val()){
                setmovieData(snapshot.val())
                console.log(movieData)
            }
        })
    }, [])
    return (
        <Container>
            {movieData && (
                <>
                    <Background>
                <img src={movieData?movieData.backgroundImg:"/images/loading1.gif"} alt="" />
            </Background>
            <ImageTitle>
                <img src={movieData?movieData.titleImg:"/images/loading.gif"} alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                <span>+</span>
                </AddButton>
                <GroupWatch>
                    <img src="/images/group-icon.png" />
                </GroupWatch>
                
            </Controls>
            <Subtitle>
                    {movieData?movieData.subTitle:"Loding"}
            </Subtitle>
            <Description>
            {movieData?movieData.description:"Loading please wait"}
       
            </Description>
                </>
            )}
            
        </Container>
    )
}

export default Detail

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;

   
`

const Background=styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle=styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display: flex;
    align-items: center;
`

const PlayButton=styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(249,249,249);
    color: black;
    padding: 0 24px;
    margin-right: 24px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    span{
        letter-spacing: 1.8px;
    }

    &:hover{
        background-color: rgb(198,198,198);
    }
`
const TrailerButton=styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: white;
    
`
const AddButton=styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    border-radius: 50%;
    border: 2px solid rgb(249,249,249);
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    span{
        font-size:30px;
    }
    
`
const GroupWatch=styled(AddButton)`
    background-color: rgba(0,0,0,0.8);
`

const Subtitle=styled.div`
    color: rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;

`
const Description=styled.div`
    color: rgb(249,249,249);
    font-size:20px;
    line-height: 1.4;
    margin-top:16px;
    max-width:500px;

`
