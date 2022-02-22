import React from 'react';
import styled from "styled-components";
import * as KosherZmanim from "kosher-zmanim";

const options = {
    date: Date.now(),
    timeZoneId: "America/New_York",
    locationName: "FarRockaway",
    latitude: 40.60370,
    longitude: -73.76206,
    elevation: 0,
    complexZmanim: false,
}

const Zmainim = () => {
    const zmanim = KosherZmanim.getZmanimJson(options);
    console.log(zmanim)

    return(
        <Container style={style.col2}>
            <Title>Zmanim</Title>
        </Container>
    )
}

// ////// Styles //////////
const Container = styled.div`
    background-color: lightblue;
`
const Title = styled.h1`

`

const style= {
    col2:{
        gridRow: 'span 2'
    }
}

export default Zmainim