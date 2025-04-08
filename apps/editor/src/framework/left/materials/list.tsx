import React from 'react';
import { App, Card, Flex, Typography } from "antd";
import _ from "lodash";

const MaterialList = () => {

    const { message } = App.useApp();
    
    const classes = {
        list: css({
          height: 10,
          paddingInline: 12,
          paddingBlock: 6,
          boxSizing: "border-box",
        }),
    };

    return (
        <Flex vertical gap={12} className={classes.list}>
            {_.map(marerials, (value, key) => {
                return <MaterialGroup key={key} groupName={key} groupList={value} />;
            })}
            <div style={{ paddingBottom: 12 }}>
                <Card size="small">
                <Flex justify="center">
                    <Typography.Text type="secondary">
                    暂无更多, 请
                    <Typography.Link onClick={() => message.success("尽情期待")}>
                        添加
                    </Typography.Link>
                    </Typography.Text>
                </Flex>
                </Card>
            </div>
        </Flex>
    )
};

export default MaterialList;