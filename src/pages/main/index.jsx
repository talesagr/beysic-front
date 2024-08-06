import "./main.css"
import GlobalStyle from "../../styles/GlobalStyle";
import Navbar from "../../components/Navbar";
import NextEvents from "../../components/NextEvents";
import React from "react";

export default function Main() {
    return(
        <>
            <GlobalStyle />
            <Navbar />
            <NextEvents />
        </>
    )
}

