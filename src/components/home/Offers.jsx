import React from "react";
import { offersList } from "../../lib/db";
import { Container } from '../common/Container'
import OffersCard from "./OffersCard";

const Offers = () => {
  return (
    <section className="bg-[#002228] md:py-20">
      <Container>
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 md:gap-[24px] px-6 md:px-0">
            {offersList.map((card, i) => (
              <OffersCard key={i} {...card} />
            ))}
          </div>
      </Container>
    </section>
  );
};

export default Offers;
