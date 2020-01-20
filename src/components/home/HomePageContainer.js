import React from "react";
import {AlertBox} from "./AlertBox";
import "./HomePageContainer.scss";
import {FirstC} from "./FirstC";
import {StoreProvider} from "../../context/GlobalState";

export const HomePageContainer = () => {
    return (
        <StoreProvider>
            <div className="dark-background">
                <AlertBox/>
                <FirstC/>
            </div>
        </StoreProvider>
    )
};