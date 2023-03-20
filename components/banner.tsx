import Input from "./input"
import Output from "./output"

export default function Banner() {
	  return (
<section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[1400px] lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">


      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Generating cover letters.

        <span className="sm:block"> Fast and Easy. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
	  Simplify Your Job Application!
      </p>
		<Input />
	
	
    </div>

  </div>
</section>

  )
}