import React, { FC } from 'react';
import { Column } from 'app/components';
import { ColumnProps } from 'app/components/Column';

export type RowProps = ColumnProps;

const RowComponent: FC<RowProps> = props => <Column flexDirection='row' {...props} />;

export default RowComponent;
