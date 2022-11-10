import { memo } from 'react';
import { FaBookmark } from 'react-icons/fa';

const PropertyCard = memo(({ property, isSaved, toggleBoomark }) => {
  const { photos, price, display_address, property_id } = property;
  const mainPhoto = photos && photos.length ? photos[0] : undefined;

  const color = isSaved ? 'red' : 'yellow'

  return (
    <div className="border-2 bg-gray-50 flex flex-col">
      <div className="relative grow">
        {
          mainPhoto ?
            <img src={`https://mr0.homeflow.co.uk/${mainPhoto}`} alt={display_address} /> :
            <div className="flex text-base grow justify-center items-center h-full text-lg text-stone-500">No Photo</div>
        }

        <button className="absolute top-0 right-2" title="Click to bookmark this property" onClick={toggleBoomark(property_id)}>
          <FaBookmark className={`text-${color}-400`} size="40" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{price}</p>
      </div>

      <div className="px-3 py-2">
        <p>{display_address}</p>
      </div>
    </div>
  );
});

export default PropertyCard;
