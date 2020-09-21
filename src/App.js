import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import $ from 'jquery';
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth } from './firebase';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './components/homeBody';
import Login from './components/Login';
import ForgotPassword from './components/forgotPassword';
import Register from './components/register';
import Payment from './components/payment';
import Checkout from './components/checkout';
import Orders from './components/orders';

const Apikey = loadStripe('pk_test_51HST2ACrAbXD0UyyFNxTJo8TDLxDJiGuMiuWsaDPVvH0ifiU484BOFuI1AvHGXPOwjzYwAa7FPYcaoQEbisGAKme00NchWU52p');


function App () {
  //eslint-disable-next-line
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log(authUser);
        if(authUser) {
            dispatch({
              type : 'Set user',
              user : authUser
            })
        }
        else{
            dispatch({
              type : 'Set user',
              user : null
            })
        }
      })
    
      $(".js-carousel").each(function(){
        var $carousel = $(this),
          $carouselContainer = $carousel.find(".js-carousel-container"),
          $carouselList = $carousel.find(".js-carousel-list"),
          $carouselItem = $carousel.find(".js-carousel-item"),
          $carouselButton = $carousel.find(".js-carousel-button"),
          setItemWidth = function(){
            $carouselList.removeAttr("style");
            var curWidth = $($carouselItem[0]).outerWidth() * $carouselItem.length;
            $carouselList.css("width", curWidth);
          },
          slide = function(){
            var $button = $(this),
              dir = $button.data("dir"),
              curPos = parseInt($carouselList.css("left")) || 0,
              moveto = 0,
              containerWidth = $carouselContainer.outerWidth(),
              listWidth = $carouselList.outerWidth(),
              before = (curPos + containerWidth),
              after = listWidth + (curPos - containerWidth);
            if(dir === "next"){
              moveto = (after < containerWidth) ? curPos - after : curPos - containerWidth;
            } else {
              moveto = (before >= 0) ? 0 : curPos + containerWidth;
            }
            
            
            $carouselList.animate({
              left: moveto
            });
          };
        $(window).resize(function(){
          setItemWidth();
        });
        setItemWidth();
        
        $carouselButton.on("click", slide);
      })
      
    }, []) 
    
   
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/">
      
      <Header/>
      </Route>
      
       <Route path="/checkout">
    <Checkout />
      </Route>
      <Route path="/login">
        <Login/>    
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/payment'>
            <Elements stripe={Apikey}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
 
      </Switch>
        </div>
        
        </Router>
  );

}


export default App;
