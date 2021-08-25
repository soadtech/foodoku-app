import React from 'react';

export const AppContext = React.createContext(null);


export const ContextWrapper = (props) => {
    const [restaurants, setRestaurants] = React.useState(null)
    return (
        <AppContext.Provider value={{ restaurants, setRestaurants }}>
            {props.children}
        </AppContext.Provider>
    );
}