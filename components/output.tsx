export default function Output({ result="" }) {
	const repalce = result.replace(/\\n/g, "<br/>");
	return(
		<>
		{result && (
			<div className="flex flex-col items-center justify-center mt-8 w-full">
				<div className="mt-4">
					<p className="font-semibold text-gray-800 text-white whitespace-pre-wrap">
						{repalce}
					</p>
				</div>
			</div>
		)}
		</>
	)
};