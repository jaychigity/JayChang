import Link from "next/link"
import { type ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  href: string
  variant: "primary" | "ghost" | "outline"
  className?: string
  size?: "default" | "full"
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary:
    "inline-block text-center bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-btn font-semibold py-[18px] px-[36px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[1px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200",
  ghost:
    "bg-transparent text-[#F7F4EE] font-sans text-btn font-normal hover:text-[#1d7682] hover:pl-1 transition-all duration-200",
  outline:
    "inline-block text-center bg-transparent border-[1.5px] border-[#1d7682] text-[#1d7682] font-sans text-btn font-semibold py-[14px] px-[28px] rounded-full hover:bg-gradient-to-b hover:from-[#2a9dab] hover:to-[#1d7682] hover:text-[#F7F4EE] hover:border-transparent hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_16px_rgba(29,118,130,0.3)] transition-all duration-200",
}

export default function Button({
  children,
  href,
  variant,
  className,
  size = "default",
}: ButtonProps) {
  const sizeStyles = size === "full" ? "w-full text-center" : ""
  const classes = `${variantStyles[variant]} ${sizeStyles} ${className ?? ""}`.trim()
  const isExternal = href.startsWith("http")

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
