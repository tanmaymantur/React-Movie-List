import { Component } from "react";
import styled from "styled-components";


const Nav = styled.div`
     height: ${(props) => props.height};
     background: #4267b2;
     display: flex;
     justify-content: space-between;
     align-items: center;
     position: relative;
     &:hover {
        background : #4267b2;
     };
    
`

export default function Navbar(props) {

    const { cartCount } = props;
    return (
        <Nav height='70px'>
            <div style={styles.title}>Movie-App</div>
            <div style={styles.cartContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart icon" />
                <span style={styles.cartCount}>{cartCount}</span>
            </div>
        </Nav>
    )
}

const styles = {
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },

    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-seriff',
        textTransform: 'uppercase',
        marginLeft: 20
    },

    cartContainer: {
        position: 'relative',
        cursor: 'pointer',
    },

    cartIcon: {
        height: 48,
        marginRight: 20
    },

    cartCount: {
        background: 'orange',
        borderRadius: '50%',
        padding: '4px 8px',
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12
    }
}