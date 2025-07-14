const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.info.id} // unique ID for each card
                        resData={restaurant}
                    />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;