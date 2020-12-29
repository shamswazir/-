import React,{useEffect} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

function Room({location:{pathname}}) {

    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
          
        })
    }, [pathname])


    return (
    <>
    <Hero hero="roomsHero">
        <Banner title="our rooms">
            <Link to="/home" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
    </>)
}
export default Room;
