import React from "react";
import { Select, Space } from "antd";

const FaaS = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="faas">
      <h1>Order Management</h1>
      <div className="dropdown-label-component">
        <p>Country</p>
        <Space wrap>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default FaaS;
