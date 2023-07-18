import React from "react";
import {
  Row,
  Col,
  Select,
  Space,
  Typography,
  Button,
  Dropdown,
  Tabs,
  Collapse,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    danger: true,
    disabled: true,
  },
];
const handleMenuClick = (e) => {
  console.log("click", e);
};

const FaaS = () => {
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Typography>
      <Row justify={"center"}>
        <Title level={5}>Order Management</Title>
      </Row>
      <Row justify="center" style={{ padding: "25px" }}>
        <Col span={4} align="middle">
          <Text>Country</Text>
          <Select
            defaultValue="lucy"
            // style={{ width: 120 }}
            className="select-dropdown-country"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col span={4}>
          <Text>Tenant ID</Text>
          <Select
            defaultValue="lucy"
            // style={{ width: 120 }}
            className="select-dropdown-country"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col span={4}>
          <Text>Environment</Text>
          <Select
            defaultValue="lucy"
            // style={{ width: 120 }}
            className="select-dropdown-country"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col span={4}>
          <Text>Store</Text>
          <Select
            defaultValue="lucy"
            // style={{ width: 120 }}
            className="select-dropdown-country"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Col>
        <Col span={8} align="right">
          <Dropdown menu={menuProps}>
            <Button className="custom-button">
              <Space>
                JSON
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Button type="primary" style={{ marginLeft: "15px" }}>
            Status
          </Button>
        </Col>
      </Row>
      {/* <Row> */}
      <Collapse
        size="small"
        items={[
          {
            key: "1",
            label: "Payload",
            children: (
              <Tabs
                onChange={onChange}
                type="card"
                items={[
                  {
                    label: 'Required',
                    key: 'Required',
                    children: `Content of Tab Pane Required`,
                  },
                  {
                    label: 'Optional',
                    key: 'Optional',
                    children: `Content of Tab Pane Optional`,
                  },
                ]}
              />
            ),
          },
        ]}
      />
      {/* </Row> */}
    </Typography>
  );
};

export default FaaS;