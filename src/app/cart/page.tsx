import Link from "next/link";
import OrderSummary from "./orderSummary";
import OrderList from "./orderList";

const CartPage = () => {
  return (
    <div className="nc-CartPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-12 sm:mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
            Shopping Cart
          </h2>
          <div className="block mt-3 text-xs font-medium sm:mt-5 sm:text-sm text-slate-700 dark:text-slate-400">
            <Link href={"/"} className="">
              Homepage
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <Link href={"/collection"} className="">
              Clothing Categories
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Shopping Cart</span>
          </div>
        </div>

        <hr className="my-10 border-slate-200 dark:border-slate-700 xl:my-12" />

        <div className="flex flex-col lg:flex-row">
          <OrderList />
          <div className="flex-shrink-0 my-10 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20"></div>
          <OrderSummary />
        </div>
      </main>
    </div>
  );
};

export default CartPage;
