import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/Logo.png"
import { Button } from "../components/Button"
import { useState } from "react"
import { useSidebarContext } from "../contexts/SidebarContext"

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0 hover:bg-blue-700 rounded-full"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 hover:bg-blue-700">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0 hover:bg-blue-700 rounded-full">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden hover:bg-blue-700 rounded-full"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden hover:bg-blue-700 rounded-full">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost" className="hover:bg-blue-700 rounded-full">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost" className="hover:bg-blue-700 rounded-full">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost" className="hover:bg-blue-700 rounded-full">
          <User />
        </Button>
      </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon" className="hover:bg-blue-700 rounded-full">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-10" />
      </a>
    </div>
  )
}