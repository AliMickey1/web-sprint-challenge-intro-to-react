// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledNames = styled.h3`
    font-size:  50px;
    text-shadow: 8px 4px 4px #262624;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 60%;
    height: 75px;
    padding: 10px;
    background: #9dc852;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    border: 4px white solid;
    margin: auto;
`


const StyledList = styled.li`

    list-style-type: none;
    font-family: 'luminari', fantasy;
    font-size: 25px;
    font-weight: bold;
    font-weight: 400;
    font-style: normal;  
    /* background-color: white; */
    width: 60%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
`
const StyledMenu = styled.ul`

    text-align: center;
    border: 6px gold solid;
    width: 60%;
    margin: auto;
    padding: 20px;
`


export default function CharacterData () {

const [characters, setCharacters] = useState([]);
const Character = props => (
    <StyledMenu className='menu'>
    <StyledNames className='character'>{props.info.name}</StyledNames>
    <StyledList className='height'>Height: {props.info.height}</StyledList>
    <StyledList className='mass'>Mass: {props.info.mass}</StyledList>
    <StyledList className='haircolor'>Hair Color: {props.info.hair_color}</StyledList>
    <StyledList className='skincolor'>Skin Color: {props.info.skin_color}</StyledList>
    </StyledMenu>

);


useEffect(() => {     
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => console.error(err))


}, []);



  

return (

        characters.map(ch => {
            return <Character key={ch.id} info={ch} />
        })

)

}




