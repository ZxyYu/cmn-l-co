import React from 'react';
import { css } from "@emotion/css";
import { Button, Tooltip, Flex } from "antd";
import { HuosRemixIcon } from "@huos/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
import _ from "lodash";

export enum MenuTab {
    COMPONENT = "COMPONENT",
    TREE = "TREE",
    HISTORY = "HISTORY",
    QUERIES = "QUERIES",
};

const Left = () => {

    const classes = {
        main: css({
          height: "100%",
          display: "grid",
          gridTemplateColumns: "45px 1fr",
        }),
        menu: css({
          paddingBlock: 8,
        //   borderRight: activeKey
        //     ? `1px solid ${token.colorBorderSecondary}`
        //     : undefined,
        }),
        content: css({
          minWidth: 255,
          display: "grid",
          gridTemplateRows: "36px 1fr",
        }),
        title: css({
          paddingInline: 12,
        //   borderBottom: `1px solid ${token.colorBorderSecondary}`,
        }),
    };

    const items: Record<
    MenuTab,
    {
      label: string;
      icon: React.ReactNode;
      children: React.ReactNode;
    }
  > = {
    [MenuTab.COMPONENT]: {
      label: "组件列表",
      icon: <PlusCircleOutlined />,
    //   children: <MaterialList />,
    },
    [MenuTab.TREE]: {
      label: "面包树",
      icon: <HuosRemixIcon type="icon-node-tree" />,
    //   children: <Tree />,
    },
    [MenuTab.HISTORY]: {
      label: "历史记录",
      icon: <HuosRemixIcon type="icon-history-fill" />,
    //   children: <LocalHisotry />,
    },
    [MenuTab.QUERIES]: {
      label: "状态管理",
      icon: <HuosRemixIcon type="icon-database-2-fill" />,
    //   children: <Queries />,
    },
  };

    return (
        <div className={classes.main}>
            <Flex className={classes.menu} vertical align="center" gap={8}>
            {_.map(
                items,
                (value: (typeof items)[MenuTab.COMPONENT], key: MenuTab) => (
                    <Tooltip
                    key={key}
                    color="blue"
                    placement="rightTop"
                    title={value.label}
                    >
                    <Button
                        key={key}
                        type={key === activeKey ? "primary" : "text"}
                        icon={value.icon}
                        onClick={() => setActiveKey(key)}
                    />
                    </Tooltip>
                )
            )}
            </Flex>
        </div>
    );
};

export default Left;