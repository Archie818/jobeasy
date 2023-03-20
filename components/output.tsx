export default function Output({ result="" }) {
	return(
		<>
		<div>
		{result && (
			<div className="flex flex-col items-center justify-center mt-8">
				
				<div className="mt-4 text-center">
					<h1 className="font-semibold text-gray-800 text-white">{result}</h1>
				</div>
			</div>
		)}
	</div>
	</>
	)
};