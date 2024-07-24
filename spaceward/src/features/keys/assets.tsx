import type { LucideProps } from "lucide-react";

export const KEY_THEMES: [string, string, string, string][] = [
	["#D8FF33", "#9747FF", "#0A0A0A", "#0A5B83"],
	["#F5F5F5", "#2994A9", "#185D4D", "#8DE3E9"],
	["#D8FF33", "#0000F5", "#68D511", "#F15A24"],
	["#00D8F5", "#9747FF", "#0A0A0A", "#380A83"],
	["#F5F5F5", "#F88C49", "#0A5B83", "#8DE3E9"],
	["#CDFFFC", "#3055D9", "#B528CC", "#8DE991"],
	["#4578FC", "#FFD541", "#0F4834", "#8DDEE9"],
	["#F5F5F5", "#A330D9", "#1C213F", "#E98DE5"],
];

export default {
	themeSelector: ({
		themeIndex,
		...props
	}: LucideProps & { themeIndex: number }) => (
		<svg
			{...props}
			width="267"
			height="178"
			viewBox="0 0 267 178"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_b_3484_165170)">
				<g clipPath="url(#clip0_3484_165170)">
					<path
						d="M0.5 177.5V0.5L133.5 89.25L0.5 177.5Z"
						fill={KEY_THEMES[themeIndex][0]}
					/>
					<path
						d="M266.5 177.5H0.5L133.5 89.25L266.5 177.5Z"
						fill={KEY_THEMES[themeIndex][1]}
					/>
					<path
						d="M266.5 0.5V177.5L133.5 89.25L266.5 0.5Z"
						fill={KEY_THEMES[themeIndex][2]}
					/>
					<path
						d="M0.5 0.5H266.5L133.5 89.25L0.5 0.5Z"
						fill={KEY_THEMES[themeIndex][3]}
					/>
				</g>
				<rect
					x="0.5"
					y="0.5"
					width="266"
					height="177"
					stroke="#E5EEFF"
					strokeOpacity="0.05"
				/>
			</g>
			<defs>
				<filter
					id="filter0_b_3484_165170"
					x="-328.188"
					y="-328.188"
					width="923.375"
					height="834.375"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur
						in="BackgroundImageFix"
						stdDeviation="164.094"
					/>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_3484_165170"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_3484_165170"
						result="shape"
					/>
				</filter>
				<clipPath id="clip0_3484_165170">
					<rect width="267" height="178" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	themeSelectorRounded: ({
		themeIndex,
		...props
	}: LucideProps & { themeIndex: number }) => (
		<svg
			{...props}
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.85783 5.85786C7.71501 4.00069 9.91979 2.5275 12.3463 1.52241C14.7728 0.517315 17.3735 1.02213e-08 20 1.35892e-06C22.6264 1.02213e-08 25.2271 0.517318 27.6536 1.52241C30.0802 2.52751 32.2849 4.0007 34.1421 5.85787L20 20L5.85783 5.85786Z"
				fill={KEY_THEMES[themeIndex][3]}
			/>
			<path
				d="M34.1421 5.85786C35.9993 7.71504 37.4725 9.91982 38.4776 12.3463C39.4827 14.7728 40 17.3736 40 20C40 22.6264 39.4827 25.2272 38.4776 27.6537C37.4725 30.0802 35.9993 32.285 34.1421 34.1421L20 20L34.1421 5.85786Z"
				fill={KEY_THEMES[themeIndex][2]}
			/>
			<path
				d="M34.1421 34.1421C32.2849 35.9993 30.0801 37.4725 27.6536 38.4776C25.2271 39.4827 22.6264 40 20 40C17.3735 40 14.7728 39.4827 12.3463 38.4776C9.91978 37.4725 7.715 35.9993 5.85783 34.1421L20 20L34.1421 34.1421Z"
				fill={KEY_THEMES[themeIndex][1]}
			/>
			<path
				d="M5.85783 34.1421C2.10711 30.3914 -3.08156e-05 25.3043 -3.0647e-05 20C-3.01413e-05 14.6957 2.10711 9.60859 5.85783 5.85786L20 20L5.85783 34.1421Z"
				fill={KEY_THEMES[themeIndex][0]}
			/>
		</svg>
	),

	/** @deprecated refactor */
	toggleView: ({
		selected,
		...props
	}: LucideProps & { selected?: "list" | "card" }) => (
		<svg
			{...props}
			width="60"
			height="32"
			viewBox="0 0 60 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{selected === "list" ? (
				<>
					<path
						d="M0 16C0 7.16344 7.16344 0 16 0H44C52.8366 0 60 7.16344 60 16C60 24.8366 52.8366 32 44 32H16C7.16344 32 0 24.8366 0 16Z"
						fill="#E5EEFF"
						fillOpacity="0.1"
					/>
					<path
						d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z"
						fill="white"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 11.0002C12.2502 10.77 12.4367 10.5835 12.6668 10.5835H23.5002C23.7303 10.5835 23.9168 10.77 23.9168 11.0002C23.9168 11.2303 23.7303 11.4168 23.5002 11.4168H12.6668C12.4367 11.4168 12.2502 11.2303 12.2502 11.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 16.0002C12.2502 15.77 12.4367 15.5835 12.6668 15.5835H23.5002C23.7303 15.5835 23.9168 15.77 23.9168 16.0002C23.9168 16.2303 23.7303 16.4168 23.5002 16.4168H12.6668C12.4367 16.4168 12.2502 16.2303 12.2502 16.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 21.0002C12.2502 20.77 12.4367 20.5835 12.6668 20.5835H23.5002C23.7303 20.5835 23.9168 20.77 23.9168 21.0002C23.9168 21.2303 23.7303 21.4168 23.5002 21.4168H12.6668C12.4367 21.4168 12.2502 21.2303 12.2502 21.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 11.0002C8.0835 10.77 8.27004 10.5835 8.50016 10.5835H8.5085C8.73861 10.5835 8.92516 10.77 8.92516 11.0002C8.92516 11.2303 8.73861 11.4168 8.5085 11.4168H8.50016C8.27004 11.4168 8.0835 11.2303 8.0835 11.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 16.0002C8.0835 15.77 8.27004 15.5835 8.50016 15.5835H8.5085C8.73861 15.5835 8.92516 15.77 8.92516 16.0002C8.92516 16.2303 8.73861 16.4168 8.5085 16.4168H8.50016C8.27004 16.4168 8.0835 16.2303 8.0835 16.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 21.0002C8.0835 20.77 8.27004 20.5835 8.50016 20.5835H8.5085C8.73861 20.5835 8.92516 20.77 8.92516 21.0002C8.92516 21.2303 8.73861 21.4168 8.5085 21.4168H8.50016C8.27004 21.4168 8.0835 21.2303 8.0835 21.0002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.3335 8.91683C37.1034 8.91683 36.9168 9.10338 36.9168 9.3335V13.5002C36.9168 13.7303 37.1034 13.9168 37.3335 13.9168H41.5002C41.7303 13.9168 41.9168 13.7303 41.9168 13.5002V9.3335C41.9168 9.10338 41.7303 8.91683 41.5002 8.91683H37.3335ZM36.0835 9.3335C36.0835 8.64314 36.6431 8.0835 37.3335 8.0835H41.5002C42.1905 8.0835 42.7502 8.64314 42.7502 9.3335V13.5002C42.7502 14.1905 42.1905 14.7502 41.5002 14.7502H37.3335C36.6431 14.7502 36.0835 14.1905 36.0835 13.5002V9.3335Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M46.5002 8.91683C46.27 8.91683 46.0835 9.10338 46.0835 9.3335V13.5002C46.0835 13.7303 46.27 13.9168 46.5002 13.9168H50.6668C50.8969 13.9168 51.0835 13.7303 51.0835 13.5002V9.3335C51.0835 9.10338 50.8969 8.91683 50.6668 8.91683H46.5002ZM45.2502 9.3335C45.2502 8.64314 45.8098 8.0835 46.5002 8.0835H50.6668C51.3572 8.0835 51.9168 8.64314 51.9168 9.3335V13.5002C51.9168 14.1905 51.3572 14.7502 50.6668 14.7502H46.5002C45.8098 14.7502 45.2502 14.1905 45.2502 13.5002V9.3335Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M46.5002 18.0835C46.27 18.0835 46.0835 18.27 46.0835 18.5002V22.6668C46.0835 22.8969 46.27 23.0835 46.5002 23.0835H50.6668C50.8969 23.0835 51.0835 22.8969 51.0835 22.6668V18.5002C51.0835 18.27 50.8969 18.0835 50.6668 18.0835H46.5002ZM45.2502 18.5002C45.2502 17.8098 45.8098 17.2502 46.5002 17.2502H50.6668C51.3572 17.2502 51.9168 17.8098 51.9168 18.5002V22.6668C51.9168 23.3572 51.3572 23.9168 50.6668 23.9168H46.5002C45.8098 23.9168 45.2502 23.3572 45.2502 22.6668V18.5002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.3335 18.0835C37.1034 18.0835 36.9168 18.27 36.9168 18.5002V22.6668C36.9168 22.8969 37.1034 23.0835 37.3335 23.0835H41.5002C41.7303 23.0835 41.9168 22.8969 41.9168 22.6668V18.5002C41.9168 18.27 41.7303 18.0835 41.5002 18.0835H37.3335ZM36.0835 18.5002C36.0835 17.8098 36.6431 17.2502 37.3335 17.2502H41.5002C42.1905 17.2502 42.7502 17.8098 42.7502 18.5002V22.6668C42.7502 23.3572 42.1905 23.9168 41.5002 23.9168H37.3335C36.6431 23.9168 36.0835 23.3572 36.0835 22.6668V18.5002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
				</>
			) : (
				<>
					<path
						d="M0 16C0 7.16344 7.16344 0 16 0H44C52.8366 0 60 7.16344 60 16C60 24.8366 52.8366 32 44 32H16C7.16344 32 0 24.8366 0 16Z"
						fill="#E5EEFF"
						fillOpacity="0.1"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 11.0002C12.2502 10.77 12.4367 10.5835 12.6668 10.5835H23.5002C23.7303 10.5835 23.9168 10.77 23.9168 11.0002C23.9168 11.2303 23.7303 11.4168 23.5002 11.4168H12.6668C12.4367 11.4168 12.2502 11.2303 12.2502 11.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 16.0002C12.2502 15.77 12.4367 15.5835 12.6668 15.5835H23.5002C23.7303 15.5835 23.9168 15.77 23.9168 16.0002C23.9168 16.2303 23.7303 16.4168 23.5002 16.4168H12.6668C12.4367 16.4168 12.2502 16.2303 12.2502 16.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.2502 21.0002C12.2502 20.77 12.4367 20.5835 12.6668 20.5835H23.5002C23.7303 20.5835 23.9168 20.77 23.9168 21.0002C23.9168 21.2303 23.7303 21.4168 23.5002 21.4168H12.6668C12.4367 21.4168 12.2502 21.2303 12.2502 21.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 11.0002C8.0835 10.77 8.27004 10.5835 8.50016 10.5835H8.5085C8.73861 10.5835 8.92516 10.77 8.92516 11.0002C8.92516 11.2303 8.73861 11.4168 8.5085 11.4168H8.50016C8.27004 11.4168 8.0835 11.2303 8.0835 11.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 16.0002C8.0835 15.77 8.27004 15.5835 8.50016 15.5835H8.5085C8.73861 15.5835 8.92516 15.77 8.92516 16.0002C8.92516 16.2303 8.73861 16.4168 8.5085 16.4168H8.50016C8.27004 16.4168 8.0835 16.2303 8.0835 16.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.0835 21.0002C8.0835 20.77 8.27004 20.5835 8.50016 20.5835H8.5085C8.73861 20.5835 8.92516 20.77 8.92516 21.0002C8.92516 21.2303 8.73861 21.4168 8.5085 21.4168H8.50016C8.27004 21.4168 8.0835 21.2303 8.0835 21.0002Z"
						fill="#E5EEFF"
						fillOpacity="0.6"
					/>
					<path
						d="M30 16C30 8.26801 36.268 2 44 2C51.732 2 58 8.26801 58 16C58 23.732 51.732 30 44 30C36.268 30 30 23.732 30 16Z"
						fill="white"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.3335 8.91683C37.1034 8.91683 36.9168 9.10338 36.9168 9.3335V13.5002C36.9168 13.7303 37.1034 13.9168 37.3335 13.9168H41.5002C41.7303 13.9168 41.9168 13.7303 41.9168 13.5002V9.3335C41.9168 9.10338 41.7303 8.91683 41.5002 8.91683H37.3335ZM36.0835 9.3335C36.0835 8.64314 36.6431 8.0835 37.3335 8.0835H41.5002C42.1905 8.0835 42.7502 8.64314 42.7502 9.3335V13.5002C42.7502 14.1905 42.1905 14.7502 41.5002 14.7502H37.3335C36.6431 14.7502 36.0835 14.1905 36.0835 13.5002V9.3335Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M46.5002 8.91683C46.27 8.91683 46.0835 9.10338 46.0835 9.3335V13.5002C46.0835 13.7303 46.27 13.9168 46.5002 13.9168H50.6668C50.8969 13.9168 51.0835 13.7303 51.0835 13.5002V9.3335C51.0835 9.10338 50.8969 8.91683 50.6668 8.91683H46.5002ZM45.2502 9.3335C45.2502 8.64314 45.8098 8.0835 46.5002 8.0835H50.6668C51.3572 8.0835 51.9168 8.64314 51.9168 9.3335V13.5002C51.9168 14.1905 51.3572 14.7502 50.6668 14.7502H46.5002C45.8098 14.7502 45.2502 14.1905 45.2502 13.5002V9.3335Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M46.5002 18.0835C46.27 18.0835 46.0835 18.27 46.0835 18.5002V22.6668C46.0835 22.8969 46.27 23.0835 46.5002 23.0835H50.6668C50.8969 23.0835 51.0835 22.8969 51.0835 22.6668V18.5002C51.0835 18.27 50.8969 18.0835 50.6668 18.0835H46.5002ZM45.2502 18.5002C45.2502 17.8098 45.8098 17.2502 46.5002 17.2502H50.6668C51.3572 17.2502 51.9168 17.8098 51.9168 18.5002V22.6668C51.9168 23.3572 51.3572 23.9168 50.6668 23.9168H46.5002C45.8098 23.9168 45.2502 23.3572 45.2502 22.6668V18.5002Z"
						fill="black"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.3335 18.0835C37.1034 18.0835 36.9168 18.27 36.9168 18.5002V22.6668C36.9168 22.8969 37.1034 23.0835 37.3335 23.0835H41.5002C41.7303 23.0835 41.9168 22.8969 41.9168 22.6668V18.5002C41.9168 18.27 41.7303 18.0835 41.5002 18.0835H37.3335ZM36.0835 18.5002C36.0835 17.8098 36.6431 17.2502 37.3335 17.2502H41.5002C42.1905 17.2502 42.7502 17.8098 42.7502 18.5002V22.6668C42.7502 23.3572 42.1905 23.9168 41.5002 23.9168H37.3335C36.6431 23.9168 36.0835 23.3572 36.0835 22.6668V18.5002Z"
						fill="black"
					/>
				</>
			)}
		</svg>
	),
};