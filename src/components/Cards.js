import React from 'react';
import styled from 'styled-components';
import Icon1 from '../images/13.jpg';
import Icon2 from '../images/tricare.jpg';
import Icon3 from '../images/7.jpg';



const CardsContainer =styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FEFBE7;

    @media screen and (max-width: 768px){
        height: 1500px;

    };

    @media screen and (mex-width: 480px){
        height:1300px;

    };
`;

const CardsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding-left: 0 50px;
    
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    };


    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    };
`;

const CardsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;

    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transitiom: all 0.2s ease-in-out;
        cursor: pointer;
    };
`;

const CardsIcon = styled.img`
    height: 200px;
    width: 260px;
    margin-bottom: 10px;
`;

const CardsH1 = styled.h1`
    font-size: 2.5rem;
    color: #001E6C;
    margin-bottom: 64px;
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

const CardsH2 = styled.h2`
    font-side: 1rem;
    margin-bottom: 10px;
`;

export const CardsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

const Cards = () => {
  return (
    <CardsContainer id='jouney'>
        <CardsH1>CONTINUE YOUR JOURNEY WITH THE NAVY RESERVE</CardsH1>
        <CardsWrapper>
            <CardsCard>
            <CardsIcon src={Icon1} />
            <CardsH2>SERVE NEAR HOME</CardsH2>
            <CardsP>SERVE A MINIMUM of 1 weekend a month at your local NRC + 2 weeks a year with your Unit.</CardsP>
            </CardsCard>

            <CardsCard>
            <CardsIcon src={Icon2} />
            <CardsH2>MEDICAL</CardsH2>
            <CardsP>Tricare Reserve Select Costs with low monthly premiums: Individual $46.70/Family $229.99.</CardsP>
            </CardsCard>

            <CardsCard>
            <CardsIcon src={Icon3} />
            <CardsH2>TRAVEL</CardsH2>
            <CardsP>Annual Training can send you to exotic locations like Hawaii, Thailand, Spain and Italy for 2 weeks.</CardsP>
            </CardsCard>
        </CardsWrapper>

    </CardsContainer>
  )
}

export default Cards