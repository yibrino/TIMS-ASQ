import React from "react";
import ThemeLink from "./ThemeLink";
import { AiOutlineArrowDown } from "react-icons/ai";
import { getSession } from "next-auth/react"; // Correct import for getSession

export default function Hero({ session }) {
  // Inline styles for the background image
  const heroBackgroundStyle = {
    backgroundImage: "url('/tigrayMap.jpg')", // URL of the background image
    backgroundSize: "cover", // Ensure the image covers the full container
  };

  return (
    <div
      className="bg-gradient-to-b items-center from-blue-900 flex flex-col pt-8 md:py-32 px-4 md:px-16 text-slate-50 items-center gap-6"
      style={heroBackgroundStyle} // Apply the background image styles here
    >
      <div className="flex text-black flex-col space-y-8 items-center max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Inventory management software for Tigray Automotive Engineering.
        </h2>
        <p className="text-black md:text-xl">
          Increase your sales and keep track of every unit with our powerful
          stock management, order fulfillment, and inventory control software.
        </p>
        <div className="py-4 flex space-x-4 items-center">
          {session ? (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 text-white"
              title="View Dashboard"
              href="/dashboard/home/overview"
              icon={<AiOutlineArrowDown />}
            />
          ) : (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 text-white"
              title="Access the Inventory System"
              href="/dashboard/home/overview"
              icon={<AiOutlineArrowDown />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Fetch session info server-side
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session, // Pass the session to the component as props
    },
  };
}
