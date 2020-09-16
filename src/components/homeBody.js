import React from 'react';
import Header from './header';
import Toproduct from './topProduct';
import Product from './product'

function HomeBody (){

    return (
        <div className="home_container">
        <Header />
        <Toproduct />
      
      <div className="product_home">
        <Product
        id= "3940ee3321"
        title = "2020 New Men's Thick Sneakers Trendy Casual Shoes" 
        image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/721724/1.jpg?4175"
        price={23.88}
        rating={4}/>
        <Product
        title = "Gionee S10 Lite 5.2 Inch HD 4GB RAM 32GB ROM "
        image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/849294/1.jpg?3187"
        price={13.33}
        rating={3}
        />
        <Product
        id="0494093eerfv3"
        title="Hp 255 G7 AMD Dual Core 4GB RAM 500GB HDD 15.6-Inch Windows 10"
        image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/811314/1.jpg?1003"
        price={45.2}
        rating={4}/>
        <Product 
        id ="4320400949jjet3"
        title="Scanfrost Refrigerator SFR50 - Sliver Cooler"
        image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/59034/1.jpg?0630"
        price={15}
        rating={4}/>
      </div>
      <div className="product_home">
          <Product
          id="278iss03jr83"
          title="Tummy Control Butt Lifter With Short Girdle Tight - Butt` Shapewear "
          image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/799454/1.jpg?5186"
          price={10.99}
          rating={4}
          />
          <Product
          id="037923432"
          title="Smart Bracelet Heart Rate 1.3 Inch Blood Pressure Sleep A6S Waterproof USB Direct Charge"
          image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/671605/1.jpg?0807"
          price={29.93}
          rating={5}/>
      </div>
        </div>
    )
}

export default HomeBody;