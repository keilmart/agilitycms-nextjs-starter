import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getModule } from "components/agility-pageModules";

const DefaultTemplate = (props) => {
    const {page} = props;
    return (<>
        {Object.keys(page.zones).map( (zoneName, idx) => {
            return <ContentZone key={idx} name={zoneName} {...props} getModule={getModule} />
        })}
    </>
    );
};

export default DefaultTemplate;
