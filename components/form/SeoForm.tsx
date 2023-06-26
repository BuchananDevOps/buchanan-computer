import { FC, SetStateAction, useEffect, useState } from "react"

import useAxios from "axios-hooks"

const SeoForm: FC = () => {
  const [domain, setDomain] = useState("")
  const [email, setEmail] = useState("")
  const [pageUri, setPageUri] = useState<string>()

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/audit",
      method: "POST",
      data: { domain, email, pageUri },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setDomain("")
      setEmail("")
    }
  }, [data?.success, loading, error])

  useEffect(() => {
    setPageUri(window.location.href)
  })

  return (
    <form className="form">
      <fieldset className="space-y-2">
        <div className="grid grid-cols-12 items-end gap-2">
          <div className="col-span-12 sm:col-span-5">
            <label className="flex flex-1 flex-col gap-0.5">
              <span className="text-black">
                Domain name
                <span className="font-normal text-red-600 pl-1">*</span>
              </span>
              <input
                required
                className="text-neutral-900 ring-1"
                id="contact-form__domain"
                name="domain"
                placeholder="https://yourwebsite.com"
                type="text"
                value={domain}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setDomain(e.target.value)
                }
              />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <label className="flex flex-1 flex-col gap-0.5">
              <span className="text-black">
                Email Address
                <span className="font-normal text-red-600 pl-1">*</span>
              </span>
              <input
                required
                className="text-neutral-900 ring-1"
                id="contact-form__email"
                name="email"
                placeholder="example@company.com"
                type="email"
                value={email}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
              />
            </label>
          </div>
          <input name="action" type="hidden" value="contact_us" />
          <input
            name="page"
            type="hidden"
            value='{"title":"SEO Audit — Buchanan Computer"}'
          />
          <div className="col-span-12 sm:col-span-2">
            <button
              className="bg-slate-900 mt-2 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-10 w-full px-6 rounded-lg flex items-center justify-center"
              type="submit"
              onClick={() => refetch()}
            >
              Send
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default SeoForm
