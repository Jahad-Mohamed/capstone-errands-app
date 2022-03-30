import React from "react";
import { vehicleList } from "../../data/VehicleList";

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>

      <CarList>
        {vehicleList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service className={styles.rideSelector__service}>
                {car.service}
              </Service>
              <Time className={styles.rideSelector__time}>5 min away</Time>
            </CarDetails>
            <Price className={styles.rideSelector__price}>$24.00</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
