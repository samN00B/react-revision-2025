import '../index.css';
import React from "react";
import Body from './components/Body';
import ReactDOM from 'react-dom/client';
import Header from './components/header';




const resList = [
{
  type: "Restaurant",
  info: {
    id: "1003414",
    name: "Pizza Hut",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/6c8a7784-0b42-419e-81f9-f2ab2319a479_1003414.JPG",
    locality: "Chhindwara",
    areaName: "Parasia Road",
    costForTwo: "₹350 for two",
    cuisines: [
      "Pizzas", "Fast Food"
    ],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "97",
    sla: {
      deliveryTime: 47,
      lastMileTravel: 13.1,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "13.1 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2025-06-02 00:00:00",
      opened: true
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {}
      }
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {}
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
      }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--"
      }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  analytics: {
    context: "seo-data-ee0fda8e-2ad9-49c5-b8d2-bacbca61f955"
  },
  cta: {
    link: "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
];


const RestaurantCard = (props) => {
    const { resData } = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info; // destructuring , used optional chaining (resData?.info)

    return (
        <div className="res-cards" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
                }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);
