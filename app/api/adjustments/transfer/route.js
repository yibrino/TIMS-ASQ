import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      itemId,
      givingWarehouseId,
      recievingWarehouseId,
      notes,
      referenceNumber,
    } = await request.json();
    console.log(givingWarehouseId, recievingWarehouseId);
    const item = await db.item.findUnique({
      where: {
        id: itemId,
      },
    });
    // the Giving Warehouse
    const givingWarehouse = await db.warehouse.findUnique({
      where: {
        id: givingWarehouseId,
      },
    });
    //Get Current Sock
    const currentGivingWarehouseStock = givingWarehouse.stockQty;

    if (parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)) {
      const newStockForGivingWarehouse =
        parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty);
      //Update stock
      const updatedGivingWarehouse = await db.warehouse.update({
        where: {
          id: givingWarehouseId,
        },
        data: {
          stockQty: newStockForGivingWarehouse,
        },
      });
      // Update the item in the giving warehouse
      const updatedItemInGivingWarehouse = await db.item.update({
        where: {
          id: itemId,
        },
        data: {
          warehouseId: givingWarehouseId, // Make sure to update the warehouse ID if it's not the same
          quantity: newStockForGivingWarehouse,
        },
      });
      // Get the recieving warehouse
      const recievingWarehouse = await db.warehouse.findUnique({
        where: {
          id: recievingWarehouseId,
        },
      });
      //Get Current Sock
      const currentRecievingWarehouseStock = recievingWarehouse.stockQty;
      const newStockForRecievingWarehouse =
        parseInt(currentRecievingWarehouseStock) + parseInt(transferStockQty);
      //Update stock
      const updatedRecievingWarehouse = await db.warehouse.update({
        where: {
          id: recievingWarehouseId,
        },
        data: {
          stockQty: newStockForRecievingWarehouse,
        },
      });
      // Update the item in the receiving warehouse
      const updatedItemInReceivingWarehouse = await db.item.update({
        where: {
          id: itemId,
        },
        data: {
          warehouseId: recievingWarehouseId, // Make sure to update the warehouse ID if it's not the same
          quantity: newStockForRecievingWarehouse,
        },
      });

      // UPDATE THE ITEM IN BOTH WAREHOUSES
      // Item in the Giving Warehouse

      const adjustment = await db.transferStockAdjustment.create({
        data: {
          itemId,
          referenceNumber,
          transferStockQty: parseInt(transferStockQty),
          givingWarehouseId,
          recievingWarehouseId,
          notes,
        },
      });
      console.log(adjustment);
      return NextResponse.json(adjustment);
    } else {
      return NextResponse.json(
        {
          data: null,
          message: "Giving Warehouse has No enough stock",
        },
        { status: 409 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create adjustment",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const adjustments = await db.transferStockAdjustment.findMany({
      orderBy: {
        createdAt: "desc", //Latest category
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch adjustments",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedAdjustment = await db.transferStockAdjustment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedAdjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete the Adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
