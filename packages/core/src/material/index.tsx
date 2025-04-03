import React from "react";
import { UserComponent, useNode } from "@craftjs/core";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useParseBinding } from "./binding";
import { EmptySetter } from "./empty";
import { omit } from "lodash";

export type ReactMaterialComponent = UserComponent;

export type ReactMaterialViewType<
  P = Record<string, unknown>,
  T = (dom: Element) => void,
> = React.ForwardRefRenderFunction<T, P>;

/** HOC类型 */
export type FunctionComponent<T = Record<string, unknown>> = React.FC<
  {
    mountRef: (dom: HTMLElement) => void;
    children?: React.ReactNode;
  } & T
>;


const fallbackRender = (props: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{props.error.message}</pre>
    </div>
  );
};

/**
 * 将UI组件和装饰器
 * @param { React.FunctionComponent } WrappedComponent 设计组件
 */
const withConnectNode = (
  WrappedComponent: React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement>>
): ReactMaterialComponent => {
  return function ({
    children,
    __events__ = [],
    ...props
  }: Record<string>) {
    const {
      connectors: { connect, drag },
      name,
      custom,
    } = useNode((node) => {
      return ({
        custom: node.data.custom,
        name: node.data.name.replaceAll('__', '')
      })
    });
    const memoizdProps = useParseBinding(props, __events__);

    const renderChildRen = memoizdProps?.$$children || children

    return (
      <ErrorBoundary fallbackRender={fallbackRender}>
        <WrappedComponent
          ref={(dom) => {
            if (custom.useResize) {
              connect(dom);
            } else {
              connect(drag(dom));
            }
          }}
          {...omit(memoizdProps, ['$$children']) as Record<string, unknown>}
        >
          {custom?.useCanvas? (
            <EmptySetter name={name} >{renderChildRen}</EmptySetter>
          ) : (
            renderChildRen
          )}
        </WrappedComponent>
      </ErrorBoundary>
    );
  };
};

/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMaterial =(component, config, defaultProps) => {
  // hoc的compose函数执行，
  const forwardComponent = React.forwardRef<(dom: HTMLElement) => void, object>(
    component
  );
  forwardComponent.defaultProps = defaultProps;
  const MaterialNode: ReactMaterialComponent =
    withConnectNode(forwardComponent);
  MaterialNode.craft = config;

  return MaterialNode;
};
