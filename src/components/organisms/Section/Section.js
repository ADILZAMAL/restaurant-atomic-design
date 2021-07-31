import React from "react";
import Flex, { FlexItem } from "../../atoms/Flex/Flex";
import Text from "../../atoms/Text/Text";
import SingleRestaurantListing from "../SingleRestaurantListing/SingleRestaurantListing";
export default function Section({ sectionTitle, restaurants = [] }) {
  return (
    <div>
      <Text text={sectionTitle} type="heading" gutterBottom />
      <Flex>
        {restaurants.map(
          (
            {
              image,
              ad,
              preOrder,
              deliveryDuration,
              restaurantName,
              restaurantDescription,
              newRestaurant,
              closed,
            },
            index
          ) => (
            <FlexItem key={index}>
              <SingleRestaurantListing
                closed={closed}
                newRestaurant={newRestaurant}
                image={image}
                ad={ad}
                preOrder={preOrder}
                deliveryDuration={deliveryDuration}
                restaurantName={restaurantName}
                restaurantDescription={restaurantDescription}
              />
            </FlexItem>
          )
        )}
      </Flex>
    </div>
  );
}
