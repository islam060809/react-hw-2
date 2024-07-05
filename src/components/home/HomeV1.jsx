import React from 'react'
import "./Home.scss"
import box1 from '../../icons/about-box1.png'
import box2 from '../../icons/about-box2.png'
import box3 from '../../icons/about-box3.png'
import box4 from '../../icons/about-box4.png'

const HomeV1 = ({pro}) => {
  if (pro===null) {
    return <h2>Loading</h2>
  }
  const newPro = pro.slice(0,4)
  return (
    <div className='home'>
      <div className="hero">
        <div className="box1">
          <h2>The furniture brand for the <br /> future, with timeless designs</h2>
          <button>View collection</button>
          <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
            with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
            using modern web technologies.</p>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/318c/9b7a/b01e6c4660bc72629bd073b338a795ca?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUGcjXvC6TZL3Eiev8lQ48DXr39Y6GEHpLaec-gagmb8eUs7rgVCc1EFaqk5Y6RpaRsxwnX-AhtD4vURNb8Ehq-tTvaT4W6ZuvnNJreRIArbvQvOr8MpdAxvtvq38HLWuIKSR-pfn2PhJ9n9n8EQOYIl1ZW44MAnK23xDWyNq~n1o63xgTQNdZS1-xHBrw2AD01mRhOucmGuSnr3FL5oCk9Y3bDD8rK5szO5Kzzg~D54P2XWOvKDFXnNQa1Gnc9YsddMbKUoZcx35Am3bAoNJ3OE23R~9GD2NZf~Tj0M6S1c5pTi8S-qR0FeIaKzRa5yQiqpf8raGu0p1IebjpqWfg__" alt="" />
      </div>
      <div className="about">
        <h2>What makes our brand different</h2>
        <div className="boxes">
          <div className="box">
            <img src={box1} alt="" />
            <h6>Next day as standard</h6>
            <p>Order before 3pm and get your order <br />
              the next day as standard</p>
          </div>
          <div className="box">
            <img src={box2} alt="" />
            <h6>Made by true artisans</h6>
            <p>Handmade crafted goods made with  <br />
              real passion and craftmanship</p>
          </div>
          <div className="box">
            <img src={box3} alt="" />
            <h6>Unbeatable prices</h6>
            <p>For our materials and quality you <br /> won’t find better prices anywhere</p>
          </div>
          <div className="box">
            <img src={box4} alt="" />
            <h6>Recycled packaging</h6>
            <p>We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
          </div>
        </div>
      </div>
      <div className="pro">
<h2>New ceramics</h2>
<div className="carts">
  {newPro.map((el)=>{
  return (<div className=" cart">
<img src={el.image} alt="" />
<h4>{el.title}</h4>
<p>£{el.price}</p>
  </div>)
}
  )}
</div>
<button>View collection</button>
      </div>
    </div>
  )
}

export default HomeV1