"use client";

import useGetCategories from "@/services/useGetCategories";
import Link from "next/link";

export default function Navbar() {
	const { data } = useGetCategories();

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href={"/"}>All</Link>
						</li>
						{data?.map((item) => (
							<li key={item} className="capitalize">
								<Link href={`/category/${item}`}>{item}</Link>
							</li>
						))}
					</ul>
				</div>
				<Link className="btn btn-ghost normal-case text-xl" href="/">
					Shoppy
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={"/"}>All</Link>
					</li>
					{data?.map((item) => (
						<li key={item} className="capitalize">
							<Link href={`/category/${item}`}>{item}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
}
