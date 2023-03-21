import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./style/styleProfil.css";

interface Friend {
    username: string;
    photo: string;
}

interface Props {
    friends: Friend[];
    selectedIndex: number;
    handleFriendClick: (index: number) => void;
}

export default function FriendsCarousel(props: Props) {
    return (
        <div className="friends-carousel-container">
            <Carousel activeIndex={props.selectedIndex}>
                {props.friends.map((friend: Friend, index: number) => (
                    <Carousel.Item key={friend.username} onClick={() => props.handleFriendClick(index)}>
                        <img className="d-block w-100" src={friend.photo} alt={friend.username} />
                        <Carousel.Caption>
                            <h3>{friend.username}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
