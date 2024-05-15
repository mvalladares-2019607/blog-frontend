import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/dashboardPage/Content";
import { usePublication } from "../../shared/usePublication";
import { LoadSpinner } from "../../components/LoadSpinner";
import { useLocation } from "react-router-dom";
import '../style.css'


export const HomePage = () => {
    const { getPosts, allPosts, isFetching } = usePublication();
    const location = useLocation();

    useEffect(() =>{
        getPosts();
    }, []);

    if(isFetching){
        return <LoadSpinner/>;
    }

    const showBanner = location.pathname === '/';

    return (
        <div>
            <Navbar/>
            {showBanner && (
                <header>
                </header>
            )}
            <Content posts={allPosts} getPosts={getPosts}/>
        </div>
    );
};
