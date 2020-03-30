import React from 'react'

import styled, { keyframes } from 'styled-components'

const HeaderContainer = styled.div`
    justify-items: center; 
    align-content: center; 
    padding: 5%;
    text-align: center; 
    background-color: white; 
    color: red; 
    border-bottom: 5px solid black; 
`

const Header = () => {
    return (
        <HeaderContainer >
            <h1>COVID-19 TRACKER</h1>
        </HeaderContainer>
    )
}

export default Header; 