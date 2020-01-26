import React from "react";

import ContentLoader from "react-content-loader"

const TextLoader = () => (
    <ContentLoader
        height={70}
        width={382}
        speed={2}
        primaryColor="#474d61"
        secondaryColor="#062f46"
    >
        <rect x="25" y="15" rx="5" ry="5" width="140" height="20" />
    </ContentLoader>
);

export default TextLoader