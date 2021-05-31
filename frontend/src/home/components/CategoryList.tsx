import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { getCategoryList } from "../../shared/data/actions/categoryActions";
import { RootState } from "../../shared/data/reducers/rootReducers";
import { Category } from "../../shared/models/categoryModel";
import { Loading } from "../../shared/models/loadingModel";

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
  const loading: Loading | any = useSelector(
    (state: RootState) => state.category.loading
  );
  const categoryList = useSelector((state: RootState) => state.category.categoryList);
  const isLoading = loading.CATEGORY_LIST_GET_REQUEST;

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
            {categoryList.map((category: Category) => (
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
