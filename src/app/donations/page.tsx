import type { Metadata } from "next";
import { SupportProject } from "@/components/sections/support-project";
export const metadata: Metadata = { title: "Donations", description: "Help build a free video editor with an optional contribution. All editor features remain free." };
export default function SupportPage() { return <SupportProject />; }
