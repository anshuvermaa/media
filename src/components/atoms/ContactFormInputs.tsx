import React from 'react'

export default function ContactFormInputs({ data }: React.PropsWithoutRef<{ data: any }>) {
  if (data.type == 'text') {
    return (
      <div className="flex flex-col">
        <label htmlFor={data.name} className="max-md:text-sm">
          {data.field}
          {data.important && <span className="text-orange-500 ">*</span>}
        </label>
        <input
          type="text"
          className="w-full border-b-[1px] border-gray-400 bg-transparent px-5 focus:rounded-xl focus:border-[1px] md:mt-2 md:py-2"
          required={data.important}
          name={data.name}
          id={data.name}
        />
      </div>
    )
  } else if (data.type == 'select') {
    return (
      <div className="flex flex-col">
        <label htmlFor={data.name}>
          {data.field}
          {data.important && <span className="text-orange-500">*</span>}
        </label>
        <select
          name={data.name}
          id={data.name}
          className="w-full rounded-xl  border-[1px] border-gray-400 bg-transparent px-3 py-2 md:px-5 md:py-4 lg:mt-5"
        >
          {data.options?.map((e: any, ind: number) => (
            <option key={ind} value={e.value}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
    )
  } else if (data.type == 'checkbox') {
    return (
      <div className="flex justify-start">
        <input
          type="checkbox"
          name={data.name}
          id={data.name}
          className="mr-2 w-[15%] rounded-xl bg-transparent  accent-orange-500 placeholder:text-white md:w-[25%]"
        />
        <label
          className="text-xs max-md:w-[90%]"
          dangerouslySetInnerHTML={{
            __html: data.field.replace(
              'Privacy Policy',
              `<a href="/privacypolicy"><span class="underline text-xs cursor-pointer">Privacy Policy</span></a>`
            ),
          }}
          htmlFor={data.name}
        />
      </div>
    )
  } else {
    return (
      <div className="row-span-2 flex flex-col md:col-span-2">
        <label htmlFor={data.name}>
          {data.field}
          {data.important && <span className="text-orange-500">*</span>}
        </label>
        <textarea
          className="mt-5 w-full rounded-xl border-[1px] border-gray-400 bg-transparent px-5 py-4"
          rows={5}
          required={data.important}
          name={data.name}
          id={data.name}
        ></textarea>
      </div>
    )
  }
}
