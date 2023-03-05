import { createContext, useState, useEffect } from "react";
import { getDocuments } from "../utils/firebase";

export const ArtworkContext = createContext({
    selectedCategory: null,
    artworkMap: {},
});

export const ArtworkProvider = ({ children }) => {
    const [artworkMap, setArtworkMap] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const getArtworkMap = async () => {
            const tempMap = await getDocuments();
            setArtworkMap(tempMap);
        };

        getArtworkMap();
    }, []);

    const value = { artworkMap, selectedCategory, setSelectedCategory };
    return (
        <ArtworkContext.Provider value={value}>
            {children}
        </ArtworkContext.Provider>
    );
};