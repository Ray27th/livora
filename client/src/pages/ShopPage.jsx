import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import EmptyState from "../components/EmptyState.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimateIn from "../components/ui/AnimateIn.jsx";
import { categories, getCategoryBySlug, products } from "../content/catalog/index.js";

const sortOptions = {
  featured: (a, b) => (a.stockStatus === "sold_out") - (b.stockStatus === "sold_out"),
  "price-low": (a, b) => a.price - b.price,
  "price-high": (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

export default function ShopPage() {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const invalidCategory = Boolean(categorySlug && !category);

  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";
  const availability = searchParams.get("availability") || "all";
  const sort = searchParams.get("sort") || "featured";

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);

    if (!value || value === "all" || value === "featured") {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    const matchingSearch = products.filter((product) => {
      const matchesCategory = category ? product.categorySlug === category.slug : true;
      const matchesType = type === "all" ? true : product.catalogType === type;
      const matchesAvailability =
        availability === "all" ? true : availability === "available" ? product.stockStatus !== "sold_out" : product.stockStatus === "sold_out";
      const term = q.trim().toLowerCase();
      const matchesQuery = term
        ? `${product.name} ${product.summary} ${product.category.name}`.toLowerCase().includes(term)
        : true;

      return matchesCategory && matchesType && matchesAvailability && matchesQuery;
    });

    return [...matchingSearch].sort(sortOptions[sort]);
  }, [availability, category, q, sort, type]);

  if (invalidCategory) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            action={
              <Link className="btn btn--primary" to="/shop">
                Browse all products
              </Link>
            }
            body="That category is not available. Browse living, bedroom, dining, workspace, or storage instead."
            title="Category not found"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <AnimateIn className="page-hero__panel surface">
            <span className="eyebrow">Shop One59</span>
            <h1 className="page-title">
              {category ? `${category.name} for mainland Singapore homes.` : "Evergreen picks and limited drops, side by side."}
            </h1>
            <p className="lede">
              {category
                ? category.description
                : "Browse by search, category, availability, and catalogue type. The pricing story stays simple: every piece is under S$159, GST is included, and delivery remains 3 to 5 days across mainland Singapore."}
            </p>

            <div className="badge-row">
              <span className="badge badge--dark">Guest checkout</span>
              <span className="badge">No pickup</span>
              <span className="badge">No express tier</span>
            </div>
          </AnimateIn>

          <AnimateIn className="page-hero__aside surface" delay={120}>
            <img alt={category ? category.name : "One59 shop"} src={category ? category.image : "/images/entryway-reset.webp"} />
            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <h2 className="card-title" style={{ fontSize: "1.6rem", margin: 0 }}>
                Browse by room, style, and availability.
              </h2>
              <p className="body-copy">
                Search, filter, and compare pieces across the catalogue with clear prices, clear support details, and room-led browsing.
              </p>
            </div>
          </AnimateIn>
        </div>

        <div className="shop-toolbar surface" style={{ padding: "var(--space-5)" }}>
          <div className="field">
            <label htmlFor="shop-search">Search</label>
            <input
              id="shop-search"
              onChange={(event) => setParam("q", event.target.value)}
              placeholder="Search by product or category"
              type="search"
              value={q}
            />
          </div>

          <div className="field">
            <label htmlFor="shop-type">Catalogue type</label>
            <select id="shop-type" onChange={(event) => setParam("type", event.target.value)} value={type}>
              <option value="all">All</option>
              <option value="evergreen">Evergreen</option>
              <option value="drop">Drops</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="shop-availability">Availability</label>
            <select
              id="shop-availability"
              onChange={(event) => setParam("availability", event.target.value)}
              value={availability}
            >
              <option value="all">All</option>
              <option value="available">Available only</option>
              <option value="sold_out">Sold out only</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="shop-sort">Sort</label>
            <select id="shop-sort" onChange={(event) => setParam("sort", event.target.value)} value={sort}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-4)", margin: "var(--space-6) 0" }}>
          <p className="filter-note">
            Showing {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
            {category ? ` in ${category.name}` : ""}.
          </p>

          <div className="badge-row">
            {categories.map((item) => (
              <Link className="badge" key={item.slug} to={`/shop/${item.slug}`}>
                {item.name}
              </Link>
            ))}
            {category ? (
              <Link className="badge badge--dark" to="/shop">
                View all
              </Link>
            ) : null}
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="catalog-grid">
            {filteredProducts.map((product, index) => (
              <AnimateIn delay={index * 40} key={product.slug}>
                <ProductCard product={product} showCategory={!category} />
              </AnimateIn>
            ))}
          </div>
        ) : (
          <EmptyState
            action={
              <Link className="btn btn--primary" to={category ? `/shop/${category.slug}` : "/shop"}>
                Reset this view
              </Link>
            }
            body="Try removing a filter, searching a broader term, or browsing a different room collection."
            title="No products match this combination"
          />
        )}
      </div>
    </section>
  );
}
