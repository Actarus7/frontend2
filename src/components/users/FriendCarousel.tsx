import React from 'react';
import './style/styleProfil.css';



interface Friend {
  username: string;
  photo: string;
}

interface Props {
  friends: Friend[];
  selectedIndex: number;
  handleFriendClick: (index: number) => void;
}

function FriendCard({ friend }: { friend: Friend }) {
  return (
    <div className="card friend-card">
      <img src={friend.photo} className="card-img-top" alt={friend.username} />
      <div className="card-body">
        <h5 className="card-title">{friend.username}</h5>
      </div>
    </div>
  );
}

export default function FriendsCarousel({ friends }: Props) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {friends.map((friend, index) => (
          <div className={`carousel-item${index === 0 ? ' active' : ''}`} key={index}>
            <div className="card">
              <img src={friend.photo} className="card-img-top" alt={friend.username} />
              <div className="card-body">
                <h5 className="card-title">{friend.username}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}