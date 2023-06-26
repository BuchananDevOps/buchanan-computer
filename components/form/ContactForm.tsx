import { FC, SetStateAction, useEffect, useState } from "react"

import useAxios from "axios-hooks"

import FormContainer from "./FormContainer"

const ContactForm: FC = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [topic, setTopic] = useState("default")
  const [message, setMessage] = useState("")
  const [pageUri, setPageUri] = useState<string>()

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/contact",
      method: "POST",
      data: {
        firstname,
        lastname,
        email,
        phone,
        company,
        topic,
        message,
        pageUri,
      },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setFirstname("")
      setLastname("")
      setEmail("")
      setPhone("")
      setCompany("")
      setMessage("")
    }
  }, [data?.success, loading, error])

  useEffect(() => {
    setPageUri(window.location.href)
  })
  return (
    <FormContainer
      description="Someone will reach out shortly"
      heading="Get in Touch"
    >
      <form action="/api/contact" className="form">
        <fieldset className="space-y-2">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  First Name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  aria-label="firstName"
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="firstName"
                  type="text"
                  value={firstname}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setFirstname(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Last Name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  aria-label="lastName"
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="lastName"
                  type="text"
                  value={lastname}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setLastname(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Work Email
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  aria-label="email"
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Company Name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  aria-label="company"
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="company"
                  type="text"
                  value={company}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setCompany(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Phone Number
                  <span className="font-normal"> (optional)</span>
                </span>
                <input
                  aria-label="phone"
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Topic
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <select
                  className="text-neutral-200 bg-slate-700"
                  inputMode="text"
                  name="topic"
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="seoservices">SEO Services</option>
                  <option value="webdesign">Web Design</option>
                  <option value="pricing">Pricing</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="technicalsupport">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className="col-span-6">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white">
                  Project Details/Questions
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <textarea
                  required
                  className="text-neutral-200 bg-slate-700"
                  id="text-area"
                  maxLength={1500}
                  name="message"
                  placeholder="Some details about your request"
                  value={message}
                  onChange={(e: {
                    target: { value: SetStateAction<string> }
                  }) => setMessage(e.target.value)}
                />
                <span className="text-right text-xs text-secondary">
                  0/1500
                </span>
              </label>
            </div>
          </div>
          <button
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-600 text-white hover:bg-slate-500 mt-6 w-full"
            type="submit"
            onChange={() => refetch()}
          >
            Get in touch
          </button>
        </fieldset>
      </form>
    </FormContainer>
  )
}

export default ContactForm
