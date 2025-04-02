import React, {FC} from 'react';
import { Editor as RootEditor, Options } from "@craftjs/core";



export interface EditoRootWrapperProps extends Partial<Options> {
    // 本地storageKey, 用户缓存当前
    children?: React.ReactNode;
  }

export const EditoRootWrapper: FC<EditoRootWrapperProps> = () => {
    
    return (
        <div>12121212121212</div>
    );
};