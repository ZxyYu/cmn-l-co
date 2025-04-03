import React, {createElement} from 'react';
import { Flex, Tag, Typography } from "antd";
import { Canvas, useEditor } from "@craftjs/core";
import _ from "lodash";

const MaterialGroup = (props) => {

    const { connectors, actions } = useEditor();

    const isEmpty = Object.keys(props.groupList).length === 0;

    if (isEmpty) {
        return null;
    }    

    return (
        <Flex vertical gap={12}>
            <Flex justify="flex-start" gap={6}>
                <Typography.Text type="secondary">{props?.groupName}</Typography.Text>
                {isEmpty ? null : (
                <Tag color="blue" bordered={false}>
                    {Object.keys(props?.groupList).length}
                </Tag>
                )}
            </Flex>
            <div className={classes.group}>
                {_.map(props?.groupList, (value, key: string) => {
                    const displayName = value?.craft?.displayName;
                    const { icon } = value?.craft?.related || {};
                    const { useCanvas = false } = value.craft?.custom || {};
                    return (
                        <MaterialRecord
                            key={key}
                            ref={(ref: HTMLDivElement) => {
                                if (ref) {
                                connectors.create(
                                    ref,
                                    useCanvas ? (
                                    <Canvas canvas is={value} />
                                    ) : (
                                    createElement(value)
                                    ), {
                                    onCreate: (nodeTee) => {
                                        console.log('nodeTree拖拽结束', nodeTee)
                                        actions.selectNode(nodeTee.rootNodeId);
                                    },
                                    }
                                );
                                }
                            }}
                            name={displayName}
                            icon={icon ? createElement(icon) : <SmileOutlined />}
                        />
                    )
                })}
            </div>
        </Flex>
    );
};

export default MaterialGroup;