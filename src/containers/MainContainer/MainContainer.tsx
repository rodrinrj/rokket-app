import { Layout } from "antd";
import React from "react";
import BooksDashboard from "../../modules/books/containers/BooksDashboard";
import CardContainer from "../CardContainer/CardCantainer";

const { Content } = Layout;

const MainContainer: React.FC = () => {
  return (
    <Layout>
      <Content>
        <CardContainer>
          <BooksDashboard />
        </CardContainer>
      </Content>
    </Layout>
  );
};

export default MainContainer;
