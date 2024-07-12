import React, { useEffect, useState } from 'react'
import "./Home.scss"
import box1 from '../../icons/about-box1.png'
import box2 from '../../icons/about-box2.png'
import box3 from '../../icons/about-box3.png'
import box4 from '../../icons/about-box4.png'
import imgEnd from '../../icons/ImageEnd.png'
import axios from '../../axios'
import { useTranslation } from 'react-i18next'

const HomeV1 = () => {
  const { t } = useTranslation()
  const [products, setProduct] = useState(null)
  async function getProduct() {
    const { data } = await axios.get()
    const newData = await data.slice(0, 4)
    console.log(newData);
    setProduct(newData)
  }
  useEffect(() => {
    getProduct()
  }, []);
  if (products === null) {
    return <h1>{t("Loading")}</h1>
  }

  return (
    <div className='home'>
      <div className="hero">
        <div className="box1">
          <h2>{t("The furniture brand for the <br /> future, with timeless designs")}</h2>
          <button>{t("View collection")}</button>
          <p>{t("A new era in eco friendly furniture with Avelon, the French luxury retail brand <br /> with nice fonts, tasteful colors and a beautiful way to display things digitally <br /> using modern web technologies.")}</p>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/318c/9b7a/b01e6c4660bc72629bd073b338a795ca?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUGcjXvC6TZL3Eiev8lQ48DXr39Y6GEHpLaec-gagmb8eUs7rgVCc1EFaqk5Y6RpaRsxwnX-AhtD4vURNb8Ehq-tTvaT4W6ZuvnNJreRIArbvQvOr8MpdAxvtvq38HLWuIKSR-pfn2PhJ9n9n8EQOYIl1ZW44MAnK23xDWyNq~n1o63xgTQNdZS1-xHBrw2AD01mRhOucmGuSnr3FL5oCk9Y3bDD8rK5szO5Kzzg~D54P2XWOvKDFXnNQa1Gnc9YsddMbKUoZcx35Am3bAoNJ3OE23R~9GD2NZf~Tj0M6S1c5pTi8S-qR0FeIaKzRa5yQiqpf8raGu0p1IebjpqWfg__" alt="" />
      </div>
      <div className="about">
        <h2>{t("What makes our brand different")}</h2>
        <div className="boxes">
          <div className="box">
            <img src={box1} alt="" />
            <h6>{t("Next day as standard")}</h6>
            <p>{t("Order before 3pm and get your order the next day as standard")}</p>
          </div>
          <div className="box">
            <img src={box2} alt="" />
            <h6>{t("Made by true artisans")}</h6>
            <p>{t("Handmade crafted goods made with real passion and craftmanship")}</p>
          </div>
          <div className="box">
            <img src={box3} alt="" />
            <h6>{t("Unbeatable prices")}</h6>
            <p>{t("For our materials and quality you won’t find better prices anywhere")}</p>
          </div>
          <div className="box">
            <img src={box4} alt="" />
            <h6>{t("Recycled packaging")}</h6>
            <p>{t("We use 100% recycled packaging to ensure our footprint is manageable")}</p>
          </div>
        </div>
      </div>
      <div className="pro">
        <h2>{t("New ceramics")}</h2>
        <div className="carts">
          {products.map((el) => {
            return (<div className=" cart">
              <img src={el.image} alt="" />
              <h4>{el.title}</h4>
              <p>£{el.price}</p>
            </div>)
          }
          )}
        </div>
        <button>{t("View collection")}</button>
      </div>
      <div className="join">
        <h2>{t("Join the club and get the benefits")}</h2>
        <p>{t("Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more")}</p>
        <div className="">
          <input type="text" placeholder='your@email.com' />
          <button>{t("Sign up")}</button>
        </div>
      </div>
      <div className="end">
        <div className="text">
          <h3>{t("From a studio in London to a global brand with <br /> over 400 outlets")}</h3>
          <p>{t("When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. <br /><br /> Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.")}</p>
            <button>{t("Get in touch")}</button>
        </div>
        <img src={imgEnd} alt="" />
      </div>
    </div>
  )
}

export default HomeV1