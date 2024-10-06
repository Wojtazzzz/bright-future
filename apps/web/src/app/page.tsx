import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Mail, Phone, School } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8" />
            <span className="text-2xl font-bold">Szkoła Podstawowa nr 1</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:underline">
              Strona główna
            </Link>
            <Link href="#" className="hover:underline">
              O nas
            </Link>
            <Link href="#" className="hover:underline">
              Dla uczniów
            </Link>
            <Link href="#" className="hover:underline">
              Dla rodziców
            </Link>
            <Link href="#" className="hover:underline">
              Kontakt
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative bg-blue-500 text-white py-48 bg-cover bg-no-repeat bg-[url('/images/background.jpg')]">
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Witaj w naszej szkole
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Miejsce, gdzie rozwijamy pasje i kształtujemy przyszłość
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-100">
              Dowiedz się więcej
            </Button>
          </div>

          <div className="w-full h-full absolute top-0 left-0 bg-black/40 z-10"></div>
        </section>

        <section className="text-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dlaczego nasza szkoła?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Wysoka jakość nauczania
                </h3>
                <p>
                  Nasi nauczyciele to pasjonaci, którzy inspirują uczniów do
                  ciągłego rozwoju.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Nowoczesne wyposażenie
                </h3>
                <p>
                  Dysponujemy nowoczesnymi pracowniami i sprzętem wspierającym
                  naukę.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Przyjazna atmosfera
                </h3>
                <p>
                  Tworzymy środowisko, w którym każdy uczeń czuje się
                  bezpiecznie i komfortowo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 text-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Aktualności</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Dzień otwarty</h3>
                <p className="mb-4">
                  Zapraszamy wszystkich zainteresowanych na dzień otwarty naszej
                  szkoły. Będzie to okazja do poznania nauczycieli i zwiedzenia
                  placówki.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>15 maja 2024</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">
                  Sukces naszych uczniów
                </h3>
                <p className="mb-4">
                  Z dumą informujemy, że nasi uczniowie zdobyli pierwsze miejsce
                  w wojewódzkim konkursie matematycznym.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10 kwietnia 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Zapisz się do newslettera
            </h2>
            <form className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Twój adres e-mail"
                className="flex-grow"
              />
              <Button type="submit">Zapisz się</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>123 456 789</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <span>kontakt@szkola.pl</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Pon-Pt: 8:00 - 16:00</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Regulamin szkoły
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Plan lekcji
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    E-dziennik
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Kalendarz wydarzeń
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Adres</h3>
              <p>ul. Szkolna 1</p>
              <p>00-001 Warszawa</p>
              <p>Polska</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; 2024 Szkoła Podstawowa nr 1. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
