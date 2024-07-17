import React from "react";
import { Layout, Row, Col, Typography } from "antd";

const { Content } = Layout;

const GoldPricePage = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          GOLD PRICE
        </Typography.Title>
      </div> 

        <iframe
          title="Gold Price"
          width="100%"
          height="750px"
          src="https://webtygia.com/api/vang?bgheader=000000&colorheader=ffffff&padding=5&fontsize=16&hienthi="
        ></iframe>
      </Content>
    </Layout>
  );
};

export default GoldPricePage;