import { createContext, useState, useEffect } from "react";
import { getDocuments } from "../utils/firebase";

export const ArtworkContext = createContext({
    artworkMap: {},
});

export const ArtworkProvider = ({ children }) => {
    const [artworkMap, setArtworkMap] = useState(null);

    useEffect(() => {
        const getArtworkMap = async () => {
            const tempMap = await getDocuments();
            setArtworkMap(tempMap);
        };

        getArtworkMap();
    }, []);

    const value = { artworkMap };
    return (
        <ArtworkContext.Provider value={value}>
            {children}
        </ArtworkContext.Provider>
    );
};