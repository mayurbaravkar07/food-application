import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { CATEGORY_CDN_URL } from '../utils/constants';

const BrowseCard = ({ data }) => {
    if (
        data?.card?.card?.gridElements?.infoWithStyle?.info &&
        data?.card?.card?.header
    ) {
        return (
            <div>
                <Title title={data?.card?.card?.header.title} />
                <div className="border-b-2 border-gray-200 pb-7">
                    <div className="flex overflow-x-scroll  ">
                        <div className="flex p-2">
                            {data?.card?.card?.gridElements?.infoWithStyle?.info.map(
                                (it) => (
                                    <Link
                                        className="w-44 transform hover:scale-95 origin-center transition-all duration-100 ease-in-out"
                                        key={it.id}
                                        to={`/collections/${it.id}`}
                                        state={{ url: it.action.link }}
                                    >
                                        <img
                                            src={CATEGORY_CDN_URL + it.imageId}
                                            alt=""
                                        />
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (
        data?.card?.card?.gridElements?.infoWithStyle?.restaurants &&
        data?.card?.card?.header
    ) {
        return (
            <div>
                <Title title={data?.card?.card?.header.title} />
                <div className="border-b-2 border-gray-200 pb-7">
                    <div className="flex overflow-x-scroll  ">
                        <div className="flex gap-2">
                            {data.card.card.gridElements.infoWithStyle.restaurants.map(
                                (restaurant) => (
                                    <Link
                                        className="w-80"
                                        to={`/restaurants/${restaurant.info.id}`}
                                        key={restaurant.info.id}
                                    >
                                      
                                            <RestaurantCard
                                                resData={restaurant}
                                            />
                                        
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (data?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        return (
            <div className="border-b-2 border-gray-200 pb-7">
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-wrap-break">
                    {data.card.card.gridElements.infoWithStyle.restaurants.map(
                        (restaurant) => (
                            <Link
                               
                                to={`/restaurants/${restaurant.info.id}`}
                                key={restaurant.info.id}
                            >
                              
                                
                                    <RestaurantCard resData={restaurant} />
                                
                            </Link>
                        )
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export default BrowseCard;
