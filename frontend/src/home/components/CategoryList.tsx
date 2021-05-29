import React, { useContext } from "react";
import { StoreContext } from "../../shared/store/StoreProvider";

import ZipCode from "./ZipCode";
import Card from "../../shared/components/UIElements/Card";
import {
  StyledContainer,
  StyledRowCard,
  StyledRowZipcode,
} from "./CategoryList.css";

const CategoryList: React.FC = () => {
  const { categoryList } = useContext(StoreContext);

  return (
    <StyledContainer>
      <h3>Poznaj nasze usługi</h3>

      <StyledRowZipcode>
        <h5>Sprawdź, czy do Ciebie dojeżdżamy</h5>
        <ZipCode />
      </StyledRowZipcode>

      <StyledRowCard>
        {categoryList.map((category) => (
          <Card
            key={category._id}
            img={category.img}
            url={category.url}
            title={category.title}
            margin='0'
          />
        ))}
      </StyledRowCard>
    </StyledContainer>
  );
};

export default CategoryList;
