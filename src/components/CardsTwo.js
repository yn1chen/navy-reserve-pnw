import React from 'react';
import './CardsTwo.css';
import CardItem from './CardItems';
import ImageOne from '../images/9.jpg';
import ImageTwo from '../images/10.jpg';
import ImageThree from '../images/11.jpg';
import ImageFour from '../images/8.jpg';
import ImageFive from '../images/12.jpg';
// import ImageFive from '';

function CardsTwo() {
  return (
    <div className='cards' id="cardstwo">
      <h1>Connect with your local Reserve Recruiters</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ImageOne}
              text1='BU1 Nava @ 360-722-1012'
              text2='Email: EDUARDO.NAVACERVANTE@NAVY.MIL'
              text3='NC1 Day @ 720-633-3603'
              text4='Email: THERESA.M.DAY@NAVY.MIL'
              label='Everett'
              path='/services'
            />
            <CardItem
              src={ImageTwo}
              text1='NC1 McGill @ 425-786-3602'
              text2='Email: WENDY.MCGILL@NAVY.MIL'
              text3='NC1 Gutierrez'
              text4='Email: ANTONIO.J.GUTIERREZ@NAVY.MIL'
              label='Kitsap'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={ImageThree}
              text1='NC1 Mack @ 757-390-1569'
              text2='Email: THEODORE.MACK@NAVY.MIL'
              text3='NC1 Morales @ 623-224-7069'
              text4='Email: DANIEL.R.MORALES@NAVY.MIL'
              label='Hawaii'
              path='/services'
            />
            <CardItem
              src={ImageFour}
              text1='MA1 Smith @ 206-305-8994'
              text2='ASHLEY.L.SMITH120.MIL@US.NAVY.MIL'
              label='Whidbey'
              path='/products'
            />
            <CardItem
              src={ImageFive}
              text1='YN1 Schmidt'
              text2='Email: THOMAS.F.SCHMIDT1@NAVY.MIL'
              text3='MA2 Talley @ 206-247-4845'
              text4='Email: BRYAN.TALLEY1@NAVY.MIL'
              label='Japan'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsTwo;