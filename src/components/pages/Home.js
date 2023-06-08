import React, { useState, useEffect } from "react";
import "../../assets/css/footer.css";
import "../../assets/css/home.css";
import "../../assets/css/header.css";
import "../../assets/css/Merchants.css";
import "../../assets/css/Merchant.css";
import Banner from "./home components/Banner";
import PopularCategory from "../pages/home components/PopularCategory";
import Merchant from "./home components/Merchant";
import Statistics from "../pages/home components/Statistics";
import TrustedMerchants from "../pages/home components/TrustedMerchants";
import LastetBlock from "../pages/home components/LastetBlock";
import PricingPlan from "../pages/home components/PricingPlan";
import { fetch_get } from "../../utils/help_functions.mjs";
import { api_route } from "../../utils/api_route";

function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response === null) {
      fetch_get(api_route.home.url, setResponse);
    }
  }, response);

  if (response === null) {
    // return <h1 className='loadingComponent'>Loading...</h1>
    return (
      <>
        <h1 className="loadingComponent">
          <i class="fa-solid fa-spinner"></i>
        </h1>
      </>
    );
  }

  return (
    <>
      <Banner
        homesliders={response == null ? [] : response.datas.homeslider.slides}
      />
      <PopularCategory
        categories={response == null ? [] : response.datas.categories}
      />
      <Merchant
        featured_products={
          response == null ? [] : response.datas.featured_products
        }
      />
      <Statistics />
      <TrustedMerchants />
      <LastetBlock />
      <PricingPlan />
    </>
  );
}

export default Home;
