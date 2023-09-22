"use client";

export default function Error({ reset }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-[20px] border-[0.1px] border-white p-8  md:p-12">
      <h2 className="text-xl font-bold text-white">Oh no!</h2>
      <p className="my-2 text-white">
        There was an issue with our storefront. This could be a temporary issue,
        please try your action again.
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
