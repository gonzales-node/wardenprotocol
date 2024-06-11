import clsx from "clsx";
import { VoteType } from "./types";
import { useMemo } from "react";

type ChartType = "pie" | "line";
type Result = Record<`${VoteType}Percent`, number>;

interface VotesChartProps {
	type: ChartType;
	result?: Result;
}

export default function VotesChart(props: VotesChartProps) {
	return props.type === "pie" ? (
		<PieChart
			segments={[
				{
					percent: props.result?.yesPercent ?? 0,
					className: "text-positive",
				},
				{
					percent: props.result?.noPercent ?? 0,
					className: "text-negative",
				},
				{
					percent: props.result?.noWithVetoPercent ?? 0,
					className: "text-pixel-pink",
				},
			]}
		/>
	) : (
		<div className="flex bg-secondary-text rounded-[48px] h-1">
			<div
				className={clsx(
					` h-1 rounded-[48px] bg-positive ml-[-4px] relattive z-[3]`,
					{
						[`w-[${props.result?.yesPercent}%]`]:
							props.result?.yesPercent ?? 0 < 100,
						"w-full": props.result?.yesPercent === 100,
					},
				)}
			></div>
			<div
				className={clsx(
					`w-[${props.result?.noPercent ?? 0}%] h-1 rounded-[48px] bg-negative ml-[-4px] relattive z-[2]`,
					{
						[`w-[${props.result?.noPercent}%]`]:
							props.result?.noPercent ?? 0 < 100,
						"w-full": props.result?.noPercent === 100,
					},
				)}
			></div>
			<div
				className={clsx(
					`w-[${props.result?.noWithVetoPercent}%] h-1 rounded-[48px] bg-pixel-pink ml-[-4px] relattive z-[1]`,
					{
						[`w-[${props.result?.noWithVetoPercent}%]`]:
							props.result?.noWithVetoPercent ?? 0 < 100,
						"w-full": props.result?.noWithVetoPercent === 100,
					},
				)}
			></div>
		</div>
	);
}

interface PieChartSegment {
	percent: number;
	className: string;
}

interface PieChartProps {
	size?: number;
	segments: PieChartSegment[];
}

function PieChart({ size = 40, segments }: PieChartProps) {
	const { content, single } = useMemo(() => {
		const radius = size / 2;
		const cx = radius;
		const cy = radius;

		let startAngle = 90;
		let endAngle = 90;
		let single: string | undefined;

		return {
			content: segments.map(({ percent, className }, i) => {
				if (percent === 100) {
					single = className;
				}

				const segmentAngle = percent * 3.6;
				startAngle = endAngle;
				endAngle = startAngle + segmentAngle;
				const largeArcFlag = segmentAngle > 180 ? 1 : 0;

				const startPointX = Math.round(
					cx + radius * Math.cos(((startAngle - 90) * Math.PI) / 180),
				);
				const startPointY = Math.round(
					cy + radius * Math.sin(((startAngle - 90) * Math.PI) / 180),
				);

				const endPointX = Math.round(
					cy + radius * Math.cos(((endAngle - 90) * Math.PI) / 180),
				);
				const endPointY = Math.round(
					cy + radius * Math.sin(((endAngle - 90) * Math.PI) / 180),
				);

				const pathData = [
					`M ${startPointX} ${startPointY}`,
					`A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPointX} ${endPointY}`,
					"L " + cx + " " + cy + " Z",
				].join(" ");

				return (
					<path
						key={i}
						d={pathData}
						className={clsx("fill-current", className)}
						stroke="white"
						strokeWidth={0.02}
						strokeLinejoin="round"
						transform={`rotate(-90 ${cx} ${cy})`}
					/>
				);
			}),
			single,
		};
	}, [size, segments]);

	return (
		<svg
			width={size}
			height={size}
			className={clsx("rounded-full", {
				"bg-fill-gray": !single,
				// fixme hack for 100% vote
				[single?.replace("text-", "bg-") ?? ""]: Boolean(single),
			})}
		>
			{!single ? content : null}
		</svg>
	);
}
