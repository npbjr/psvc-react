import * as React from 'react';
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import CustomAppBar from './layout/AppBar'
import Menu from './Menu';
export const Layout = ({ children }: { children: React.ReactNode }) => (
  <RALayout appBar={CustomAppBar}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
