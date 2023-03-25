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

interface FriendCardProps {
  friend: Friend;
}

function FriendCard({ friend }: FriendCardProps) {
  return (
    <div className="col-md-4">
      <img className="d-block w-100" src={friend.photo} alt={friend.username} />
      <div className="carousel-caption d-none d-md-block">
        <h3>{friend.username}</h3>
      </div>
    </div>
  );
}

export default function FriendsCarousel(props: Props) {
    return (
        <div className="friends-carousel-container">
            <Carousel activeIndex={props.selectedIndex}>
                {props.friends.map((friend: Friend, index: number) => (
                    <Carousel.Item key={friend.username} onClick={() => props.handleFriendClick(index)}>
                        <div className="row">
                          <FriendCard friend={friend} />
                          {props.friends[index + 1] && <FriendCard friend={props.friends[index + 1]} />}
                          {props.friends[index + 2] && <FriendCard friend={props.friends[index + 2]} />}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
