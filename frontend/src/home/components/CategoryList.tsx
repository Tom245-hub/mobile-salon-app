import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategoryList } from "../../shared/data/actions/categoryActions";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { Category } from "../../shared/models/categoryModel";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import ZipCode from "./ZipCode";
import Card from "../../shared/components/UIElements/Card";
import {
  StyledContainer,
  StyledRowCard,
  StyledRowZipcode,
  StyledTitle,
  StyledText,
} from "./CategoryList.css";

const CategoryList: React.FC = () => {
  const dispatch = useDispatch();
  const categoryList: Category[] = useSelector(
    (state: RootState) => state.category.categoryList
  );
  const isLoading = categoryList.length === 0;

  useEffect(() => {
    dispatch(getCategoryList());
  }, [getCategoryList]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StyledContainer>
          <StyledTitle>Poznaj nasze usługi</StyledTitle>

          <StyledRowZipcode>
            <StyledText>Sprawdź, czy do Ciebie dojeżdżamy</StyledText>
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
      )}
    </>
  );
};

export default CategoryList;
