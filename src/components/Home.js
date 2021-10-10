import React , {useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './Home/ImageSlider'
import Viewers from './Home/Viewers'
import Movies from './Home/Movies'
import db from '../firebaseConfig'
import {useDispatch} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'
import Recommend from './Home/Recommend'
import New from './Home/New'
import Trending from './Home/Trending'
import Original from './Home/Original'
function Home() {
    const dispatch=useDispatch();
    useEffect(()=>{
        db.ref().child("disney").child("movies").once("value",(snapshot)=>{
            let tempMovies=snapshot.val()
            dispatch(setMovies(tempMovies))
        })
    },[])
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommend />
            <New />
            <Trending />
            <Original />
        </Container>
    )
}

export default Home

const Container=styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }


`