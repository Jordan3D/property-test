import { useState, useCallback } from 'react';
import PropertyCard from './PropertyCard';

const List = ({ searchValue, properties }) => {
    const [savedProperties, setSavedProperties] = useState({});

    const onClickHandler = useCallback((id) => () => {
        setSavedProperties((state) => {
            if (state[id]) {
                const buff = { ...state };
                delete buff[id];
                return buff;
            } else {
                return { ...state, [id]: true }
            }
        })
    }, [setSavedProperties]);

    const renderCards = (properties) => {
        const renderCard = (property) => <PropertyCard
            key={property.property_id}
            property={property}
            isSaved={!!savedProperties[property.property_id]}
            toggleBoomark={onClickHandler}
        />

        return !!properties && properties.map(
            (property) => searchValue ?
                property.short_description.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ?
                    renderCard(property) : undefined : renderCard(property)
        )
    }

    return <div className='overflow-hidden overflow-y-auto pr-4 mt-5'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" onClick={onClickHandler}>
            {renderCards(properties)}
        </div>
    </div>
}
export default List;