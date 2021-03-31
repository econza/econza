import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const useAuthRedirect = () => {
const isAuth = useSelector((state) => state.auth.isAuth)

useEffect(() => {
  if (!isAuth) return <Redirect to={"/login"} />}, [isAuth]);
