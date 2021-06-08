import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "./AdminNavbar.js";
import Sidebar from "./Sidebar.js";
import HeaderStats from "./HeaderStats.js";
import FooterAdmin from "./FooterAdmin.js";
import Root from "./Root.js";
import Print from "./Print.js";
// views

import Dashboard from "./Dashboard.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/add" exact component={Root} />
            <Route path="/print/:id" component={Print} />
            <Redirect from="/admin" to="/admin/dashboard" />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
