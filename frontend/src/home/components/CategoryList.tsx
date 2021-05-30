import React, { useEffect } from "react";
import { connect } from "react-redux";

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

interface CategoryListProps {
  categoryList: Category[];
  loading: Loading | any;
  getCategoryList: Function;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  loading,
  getCategoryList,
}) => {
  const isLoading = loading.CATEGORY_LIST_GET_REQUEST;

  useEffect(() => {
    getCategoryList();
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

export default connect(
  (state: RootState) => {
    return {
      categoryList: state.category.categoryList,
      loading: state.category.loading,
    };
  },
  {
    getCategoryList,
  }
)(CategoryList);
