"use client";

import { routes } from "@/routes"

import { defineView } from "@/definitions"

const Router = routes()

const IndexLoading = defineView(Router.application.loading)

export default IndexLoading



