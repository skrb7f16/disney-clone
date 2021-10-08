import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
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
                    2018 7m Family, Fantasy, Kids, Animations
            </Subtitle>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Description>
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

`
