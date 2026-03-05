"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Especialidades" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const WA_LINK = "https://api.whatsapp.com/send/?phone=%2B543412502044&text&type=phone_number&app_absent=0&utm_source=ig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-sm ring-1 ring-black/5 bg-white flex items-center justify-center">
            <Image 
              src="/MotusLogo.png" 
              alt="Mōtus Logo" 
              fill 
              className="object-contain p-1"
              sizes="40px"
              priority
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <span className="block text-sm font-bold text-foreground">
              Mōtus Clínica Integral
            </span>
            <span className="block text-xs text-primary font-medium">
              Salud y Bienestar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>



        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="sm"
            className="rounded-full text-xs px-3 h-8 shadow-md bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir turno"
            >
              <WhatsAppIcon className="mr-1.5 h-3.5 w-3.5" />
              Turno
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] flex flex-col p-0 gap-0"
              showCloseButton={false}
            >
              <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white flex-shrink-0 font-bold"
                    style={{
                      background: "linear-gradient(135deg,#7350F2,#2B1966)",
                    }}
                  >
                    M
                  </div>
                  <SheetTitle className="text-base font-bold leading-tight">
                    Mōtus Clínica Integral
                  </SheetTitle>
                </div>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    aria-label="Cerrar menú"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </SheetHeader>

              {/* Mobile Navigation links */}
              <nav className="flex flex-col px-3 py-4">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Menú
                </p>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mx-5 h-px bg-border" />

              {/* Address */}
              <div className="flex items-start gap-3 px-5 py-4">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground leading-snug">
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p>Brown 2622, Rosario</p>
                  <p>Santa Fe, Argentina</p>
                </div>
              </div>

              <div className="mx-5 h-px bg-border" />

              {/* Mobile CTA */}
              <div className="mt-auto px-5 pb-6 pt-4">
                <Button
                  className="w-full rounded-full shadow-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-4 w-4" />
                    Pedir Turno Online
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
