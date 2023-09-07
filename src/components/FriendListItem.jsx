import React from 'react';
import { PropTypes } from "prop-types";
import styled from 'styled-components';



export default function FriendListItem({avatar, name, isOnline}) {
    const span = styled.span<{ $isOnline: Boolean }>`
    background: ${prop => prop.$isOnline? "green": "red"};
    width: 20px;
    border-radius: 50%;
    `;
    return (
    <li className='friends__item'>
        <span className='status' $isOnline={isOnline}></span>
        <img className='friends__avatar' src={avatar} alt="avatar"/>
        <p className='name'>{name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};