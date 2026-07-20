import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchFollowups } from "../features/followups/followupSlice";

import FollowupCards from "../components/followups/FollowupCards";
import FollowupFilters from "../components/followups/FollowupFilters";
import FollowupTable from "../components/followups/FollowupTable";

export default function FollowupPage() {
  const dispatch = useAppDispatch();

  const { loading, followups } = useAppSelector(
    (state) => state.followups
  );

  const [search, setSearch] = useState("");
  const [product, setProduct] = useState("");
  const [sentiment, setSentiment] = useState("");

  useEffect(() => {
    dispatch(fetchFollowups());
  }, [dispatch]);

  const products = useMemo(() => {
    return Array.from(
      new Set(
        followups
          .map((item) => item.product)
          .filter(Boolean)
      )
    );
  }, [followups]);

  const filtered = followups.filter((item) => {
    const doctorMatch = item.doctor
      .toLowerCase()
      .includes(search.toLowerCase());

    const productMatch =
      !product || item.product === product;

    const sentimentMatch =
      !sentiment || item.sentiment === sentiment;

    return (
      doctorMatch &&
      productMatch &&
      sentimentMatch
    );
  });

  console.log("Redux Followups:", followups);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading Follow-ups...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">

      <div>
        <h1 className="text-3xl font-bold">
          Follow-up Management
        </h1>

        <p className="text-gray-500 mt-1">
          Track pending doctor visits and next actions.
        </p>
      </div>

      <FollowupCards total={filtered.length} />

      <FollowupFilters
        search={search}
        setSearch={setSearch}
        product={product}
        setProduct={setProduct}
        sentiment={sentiment}
        setSentiment={setSentiment}
        products={products}
      />

      <FollowupTable data={filtered} />

    </div>
  );
}