import React from 'react';

const rooms = [
  { room_type: 'Queen', vacant_rooms: 5, price: 100 },
  { room_type: 'Double', vacant_rooms: 3, price: 75 },
  { room_type: 'Twin', vacant_rooms: 8, price: 60 },
];

export default function QuestionOne() {
  return (
    <div>
      <h1>Question One</h1>
      <ol>
        {rooms.map((myList, index) => (
          <li key={index}>
            {myList.room_type}, {myList.vacant_rooms}, ${myList.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
