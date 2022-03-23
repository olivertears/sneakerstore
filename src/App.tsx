import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './css/fonts.css'
import './css/App.css'
import {useTypedSelector} from "./hooks/useTypedSelector";
import Loader from "./components/Loader";
import Footer from "./components/Footer/Footer";
import ArrowToTop from "./components/ReusedComponents/ArrowToTop/ArrowToTop";
import {useActions} from "./hooks/useActions";
import {ICustomer} from "./models/ICustomer";

const App = () => {
    const {setAuth, setCustomer} = useActions()
    const {loading} = useTypedSelector(state => state.app)
    const [scroll, setScroll] = useState<number>(0)

    const scrollHandler = () => {
        setScroll(window.scrollY)
    }


    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setAuth(JSON.parse(localStorage.getItem('auth') || '') as boolean)
            setCustomer(JSON.parse((localStorage.getItem('customer') || '')) as ICustomer)
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <div className="appWrapper">
            <Navbar/>
            {loading
                ?
                <Loader/>
                :
                <AppRouter/>
            }
            {scroll ? <ArrowToTop/> : ''}
            <Footer/>
        </div>
    );
};

export default App;