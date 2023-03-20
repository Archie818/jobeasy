import Output from './output'
import { useState } from 'react';
import axios from 'axios';

export default function Input() {
	const [jobDescription, setJobDescription] = useState('');
	const [result, setResult] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setLoading(true);
		try {
		  const response = await fetch("/api/chat", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({ animal: jobDescription }),
		  });
	
		  const data = await response.json();
		//   console.log("dataresult",data.result);
		  if (response.status !== 200) {
			throw data.error || new Error(`Request failed with status ${response.status}`);
		  }
		  setResult(data.result);
		  setJobDescription('');
		  setLoading(false);
		} catch(error: any) {
		  // Consider implementing your own error handling logic here
		  console.error(error);
		  console.log("error",error.message);
		  alert(error.message);
		}
	  }
	

	  return (
	<form onSubmit={handleSubmit}>
	  <label
		htmlFor="JobDescription"
		className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
	  >
		<textarea
		  id="JobDescription"
		  name="JobDescription"
		  placeholder="Job Description"
		  required={true}
		  value={jobDescription || ''}
		  onChange={(e) => setJobDescription(e.target.value)}
		  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
		/>
	  
		<span
		  className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
		>
		  Job Description Here
		</span>
	  </label>

	{result && <Output result={result}/>}
	<div className="mt-8 flex flex-wrap justify-center gap-4">
		<button
		className={`block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto 
		${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
		type="submit"
		onClick={(e) => {
			if (loading) {
			e.preventDefault();
			return;
			}
			// Your button action goes here
		}}
		>
		{loading ? (
			<>
			<svg
				className="animate-spin inline-block h-4 w-4 mr-2 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
				></circle>
				<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"
				></path>
			</svg>
			Generating...
			</>
		) : (
			'Generate'
		)}
		
		</button>

		<a
		className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
		href="/about"
		>
		Learn More
		</a>
	</div>
		  
	</form>

		)
}