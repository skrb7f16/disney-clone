import React ,{useEffect} from 'react'
import styled from 'styled-components'
import { selectName,selectPhoto,setSignout,setUserLogin } from '../features/user/UserSlice'
import { useSelector } from 'react-redux'
import {auth,provider} from '../firebaseConfig'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
export default function Header() {
    const userName=useSelector(selectName)
    const userPhoto=useSelector(selectPhoto)
    const dispatch=useDispatch()
    const history=useHistory()
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin(
                    {
                        name:user.displayName,
                        email:user.email,
                        photo:user.photoURL
                    }
                ))
                history.push("/home")
            }
        })
    },[])



    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user

            dispatch(setUserLogin(
                {
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }
            ))
            history.push("/")
        })
    }

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(setSignout())
            history.push("/login")
            
        })
    }
    
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {!userName ? <LoginContainer><Login
                onClick={signIn}
            >Login</Login></LoginContainer> :
                <>
                <NavMenu >
                <a href>
                    <Logo src="images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                
                <a href>
                    <Logo src="images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a href>
                    <Logo src="images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a href>
                    <Logo src="images/original-icon.svg"/>
                    <span>ORIGINAL</span>
                </a>
                <a href>
                    <Logo src="images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a href>
                    <Logo src="images/series-icon.svg"/>
                    <span>SEREIS</span>
                </a>
            </NavMenu>
            <UserImage src={userPhoto}
                onClick={signOut}
            /> 
                </>
                
            }
            
        </Nav>
    )
}

const Nav=styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;

    `
const Logo=styled.img`
    max-width:80px;
`

const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            &:after{
                content:"";
                height:2px;
                background:white;
                width=10px;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform:scaleX(0);
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.45,0.46,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
        @media (max-width: 768px) {
            display: none;
    }
`

const UserImage=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
`

const Login=styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    transition: all 250ms;
    
    &:hover{
        background-color: rgba(249,249,249,0.8);
        color: black;
        border-color: transparent;
    }
`

const LoginContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`