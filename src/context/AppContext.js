import React from 'react';

export const AppContext = React.createContext(null);


export const ContextWrapper = (props) => {
    const [restaurants, setRestaurants] = React.useState([])
    const [restaurantInitial, setRestaurantInitial] = React.useState([])
    const [filter, setFilter] = React.useState({})
    return (
        <AppContext.Provider value={{ restaurants, setRestaurants, setRestaurantInitial, restaurantInitial, filter, setFilter }}>
            {props.children}
        </AppContext.Provider>
    );
}