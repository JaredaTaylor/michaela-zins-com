import { createContext, useState, useEffect } from "react";
import { getDocuments } from "../utils/firebase";

export const exhibitContext = createContext({
    exhibitMap: {},
});

export const ExhibitProvider = ({ children }) => {
    const [exhibitMap, setExhibitMap] = useState(null);

    useEffect(() => {
        const getExhibitMap = async () => {
            const tempMap = await getDocuments();
            setExhibitMap(tempMap);
        };

        getExhibitMap();
    }, []);

    const value = { exhibitMap };
    return (
        <ExhibitContext.Provider value={value}>
            {children}
        </ExhibitContext.Provider>
    );
};