import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../components/layout/ClientLayout/Sidebar";
import ProductFrameAll from "../../components/product/ProductFrameAll";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import ProductSearch from "../../components/product/ProductSearch";
import { getPublicData } from "../../api/apiPublic";
import Spinner from "../../components/ui/Spin";

const Shop = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["productDetails", categoryId, value],
    queryFn: ({ pageParam = 1 }) =>
      getPublicData(
        `/products/product_list_with_category?categoryId=${categoryId}&search=${value}&page_limit=10&page=${pageParam}`
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.total_pages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const allProducts = data?.pages.flatMap((page) => page.data) ?? [];
  const categoryData = data?.pages[0]?.categoryData ?? [];

  const isSkeletonLoading = isLoading && allProducts.length === 0;

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="flex px-24 pt-2">
      <Sidebar isLoading={isSkeletonLoading} categoriesData={categoryData} />
      <div className="w-full px-2 flex justify-start flex-col gap-2 ">
        <div className="flex justify-between items-center">
          <ProductSearch
            value={value}
            handaleChangeValue={(value: string) => {
              setValue(value);
            }}
          />
          <button
            className="w-40 bg-blue-800 text-white text-md py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={() => {
              setValue("");
              navigate("/product-shop/0");
            }}
          >
            CLEAR
          </button>
        </div>

        <ProductFrameAll isLoading={isSkeletonLoading} data={allProducts} />

        <div ref={observerRef} className="h-10 flex justify-center items-center">
          {isFetchingNextPage && <p className="ml-2 font-bold text-lg"><Spinner/> Loading more...</p>}
          {!hasNextPage && <p className="ml-2 font-bold text-lg">No more products</p>}
        </div>
      </div>
    </div>
  );
};

export default Shop;
