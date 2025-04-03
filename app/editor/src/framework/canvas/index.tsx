import React, { useRef } from 'react';

import { css } from "@emotion/css";

import { theme } from "antd";

const Canvas = () => {

    const { token } = theme.useToken();

    const ref = useRef<HTMLDivElement>(null);

    const classes = {
        main: css({
          borderLeft: `1px solid ${token.colorBorderSecondary}`,
          borderRight: `1px solid ${token.colorBorderSecondary}`,
          background: "#f9fafb",
          height: "100%",
          padding: token.paddingSM,
          position: "relative",
        }),
        canvas: css({
          height: "100%",
          width: "100%",
          padding: token.paddingSM,
        }),
      };
    
    return (
        <div ref={ref} className={classes.main}>
          Content
        </div>
    );
};

export default Canvas;