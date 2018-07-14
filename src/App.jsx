import { Component as React } from 'react';

class App extends React {
    render() {
        return (
            <BrowserRouter>
                <HeaderNav />
                <Router />
            </BrowserRouter>
        );
    }
}

export default App;