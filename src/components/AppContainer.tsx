import React from 'react';

interface AppContainerProps {
    children: React.ReactNode
};

const AppContainer: React.FC<AppContainerProps> = ({children}) => {
    return (
        <div className="app-container">
            {children}
        </div>
    );
};

export default AppContainer;
