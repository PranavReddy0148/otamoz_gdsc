import React from "react";
import Donate from "./donate";
import SourceType from "./sourceType";
import DateAndTime from "./date";
import Count1 from "./count1";
import GoogleMap from "./map";

function DonateButton(){
    return(
        <>
        <Count1/>
        <Donate/>
        <SourceType/>
        <DateAndTime/>
        {/* //<GoogleMap/> */}

        </>
    )
}

export default DonateButton