import React from 'react';
import { advertData } from '../../../utils/advert/advertData';
import AdvertForm from './AdvertForm';

function AdvertDetails() {
  return (
    <>
      {advertData.map((advert, index) =>
        <AdvertForm
        key={index}
          title={advert.title}
          description={advert.description}
          price1={advert.price1}
          price2={advert.price2}
          price3={advert.price3}
          ads={advert.ads}
          images={advert.images}
          merchant={advert.merchant}
          contact1={advert.contact1}
          contact2={advert.contact2}
          website={advert.website}
        />
      )}
    </>
  )
}

export default AdvertDetails