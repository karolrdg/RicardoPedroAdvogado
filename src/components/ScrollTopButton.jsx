import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                onClick={scrollToTop}
                className={`
          bg-secondary text-primary p-3 rounded-full shadow-2xl transition-all duration-300
          hover:bg-white hover:-translate-y-2 active:scale-95
          ${isVisible ? "opacity-70 cale-100" : "opacity-0 scale-0 pointer-events-none"}
        `}
                aria-label="Voltar ao topo"
            >
                <IoArrowUp className="text-2xl" />
            </button>
        </div>
    );
}