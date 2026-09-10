"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IsotopeInstance {
	arrange: (options: { filter: string }) => void;
}

export default function PortfolioFilter2(): JSX.Element {
	const isotopeContainer = useRef<HTMLDivElement>(null);
	const [filterKey, setFilterKey] = useState<string>("*");
	const [isotopeInstance, setIsotopeInstance] = useState<IsotopeInstance | null>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('isotope-layout').then(({ default: Isotope }) => {
				if (isotopeContainer.current) {
					const instance = new Isotope(isotopeContainer.current, {
						itemSelector: ".masonry-item",
						percentPosition: true,
						masonry: {
							columnWidth: ".masonry-item",
						},
						animationOptions: {
							duration: 750,
							easing: "linear",
							queue: false,
						},
					}) as IsotopeInstance;
					setIsotopeInstance(instance);
				}
			}).catch((error: Error) => {
				console.error('Failed to load Isotope:', error);
			});
		}
	}, []);

	useEffect(() => {
		if (isotopeInstance) {
			isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
		}
	}, [filterKey, isotopeInstance]);

	const handleFilterKeyChange = (key: string) => (): void => {
		setFilterKey(key);
	};

	const activeBtn = (value: string): string => (value === filterKey ? "filter active" : "filter");

	return (
		<>
		<div className="filters clearfix">
			<ul className="filter-tabs filter-btns clearfix">
				<li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
				<li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Cyber</li>
				<li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Digital</li>
				<li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Software</li>
				<li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Technology</li>
				<li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Development</li>
			</ul>
		</div>
		<div className="items-container row" ref={isotopeContainer}>
			<div className="product-block masonry-item small-column all cat-2 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/1.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Show Piece</Link></h4>
						<span className="price">$32.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star">
						</i><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-2 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/2.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Leather Belt</Link></h4>
						<span className="price">$52.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i
							className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-2 cat-4 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/3.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Sunglasses</Link></h4>
						<span className="price">$43.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-3 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/4.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Backpack</Link></h4>
						<span className="price">$22.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-3 cat-5 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/4.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Hand Watch</Link></h4>
						<span className="price">$34.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-2 cat-3 cat-4 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/3.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Party Bag</Link></h4>
						<span className="price">$52.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-2 cat-5 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/2.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Coffee Mug</Link></h4>
						<span className="price">$25.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
			<div className="product-block masonry-item small-column all cat-1 cat-4 cat-5 product lenses mb-50 col-lg-4 col-md-6">
				<div className="inner-box">
					<div className="image-box">
						<div className="image"><Link href="/shop-product-details"><img src="/assets/images/resource/products/1.jpg" alt="Image" /></Link></div>
						<div className="icon-box">
							<Link href="/shop-product-details" className="ui-btn"><i className="fa fa-heart"/></Link>
							<Link href="shop-cart" className="ui-btn"><i className="fa fa-shopping-cart"/></Link>
						</div>
					</div>
					<div className="content">
						<h4><Link href="/shop-product-details">Smart Watch</Link></h4>
						<span className="price">$30.00</span>
						<span className="rating"><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
