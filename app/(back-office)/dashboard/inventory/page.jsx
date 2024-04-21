"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {
  Diff,
  Factory,
  LayoutGrid,
  LayoutPanelTop,
  Scale,
  Slack,
  Warehouse,
} from "lucide-react";
export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create  items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "Add Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categories",
      description: "Group different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "Add Category",
      enabled: true,
      icon: LayoutPanelTop,
    },
    {
      title: "Brands",
      description: "List the brands",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "Add Brand",
      enabled: true,
      icon: Slack,
    },
    {
      title: "Warehouse",
      description: "a facility used for storing goods",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "Add Warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units",
      description: " measurements or quantities in which items are counted",
      link: "/dashboard/inventory/units/new",
      linkTitle: "Add Unit",
      enabled: true,
      icon: Scale,
    },
    {
      title: "Suppliers",
      description:
        " individuals that provide products or services to other entities",
      link: "/dashboard/inventory/suppliers/new",
      linkTitle: "Add Supplier",
      enabled: true,
      icon: Factory,
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer stock from the Main Warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "Add Adjustment",
      enabled: true,
      icon: Diff,
    },
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
Scale;
