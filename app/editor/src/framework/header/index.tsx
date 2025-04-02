import React from 'react';
import { Button, Flex, InputRef, Space, message, theme } from "antd";
import { css } from "@emotion/css";

const Header = () => {

    const classes = {
        header: css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          height: 45,
        //   border: `1px solid ${token.colorBorderSecondary}`,
        //   paddingInline: token.paddingXS,
        }),
        notice: css({
          textAlign: "center",
        }),
      };

    return (
        <div className={classes.header}>
            <Flex gap={4} align="center">
                <Space.Compact>
                    Header
                </Space.Compact>
            </Flex>
        </div>
    );
};

export default Header;