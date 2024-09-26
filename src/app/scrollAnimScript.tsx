"use client"
import { useEffect } from "react";


function scrollAnimScript( onGlobalPropChange: string ): void {

    useEffect(() => {
        let animItems = document.querySelectorAll('.anim-items');

        window.addEventListener('scroll', animOnScroll); // Добавьте обработчик прокрутки

        if (animItems.length > 0) {
            animOnScroll();
        }

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem: any = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add(onGlobalPropChange);
                } 
                // else {
                //     animItem.classList.remove(onGlobalPropChange);
                // }

            }
        }

        function offset(el: any): { top: number; left: number } {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

    }, []);
}

export { scrollAnimScript };