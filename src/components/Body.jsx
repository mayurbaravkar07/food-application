import { useEffect } from 'react';
import useOnlineStatus from './../utils/useOnlineStatus';
import useRestaurantsData from './../utils/useRestaurantsData';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import BrowseCard from './BrowseCard';
import Shimmer from './Shimmer';

const Body = () => {
    const onlineStatus = useOnlineStatus();
    const { listOfResData, loading } = useRestaurantsData();

    useEffect(() => {
   
    }, [listOfResData]);

    if (!onlineStatus) {
        return (
            <div>
                <h1>Looks like you are offline!</h1>
                <p>Please check your internet connection.</p>
            </div>
        );
    }

    return (
        <div className="body">
            {loading ? (
                <Shimmer />
            ) : (
                <div>
                    {listOfResData.map((card) => (
                        <BrowseCard data={card} key={card.card.card.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
