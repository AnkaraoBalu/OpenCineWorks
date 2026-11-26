import type { Metadata } from "next";
import { SupportProject } from "@/components/sections/support-project";
export const metadata: Metadata = { title: "Donations", alternates: { canonical: "/donations/" }, openGraph: { url: "/donations/" }, description: "Help build a free video editor with an optional contribution. All editor features remain free." };
export default function SupportPage() { return <SupportProject headingLevel="h1" />; }
