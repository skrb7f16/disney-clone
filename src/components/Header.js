import React from 'react'
import styled from 'styled-components'
export default function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
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
            <UserImage src="images/user.jpg" />
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
    }
`

const UserImage=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
`