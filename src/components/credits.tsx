import { AnchorHTMLAttributes } from "react"

export function Credits() {
  return (
    <div className="absolute text-black left-0 top-0 w-full mt-10 lg:mt-20 px-3 lg:px-40 flex flex-col lg:flex-row lg:justify-between"
    >
      <span>
        Coded by <Link href="https://x.com/Wilfried_Ng23">Wilfried Ngassarou</Link>
      </span>
      <span>
        Designed by <Link href="https://x.com/KumailNanji">Kumail Nanji</Link>
      </span>
    </div>
  )
}

function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a 
      href={props.href} 
      target="_blank"
      className="font-medium text-blue-500 underline"
    >
      {props.children}
    </a>
  )
}