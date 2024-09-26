// import { useEffect } from "react";
// import { create } from "zustand";

// type Store = {
//     animItems: HTMLElement[] | NodeList;
//     onGlobalPropChange: string;
//     animOnScroll: (onGlobalPropChange: string, animItems: HTMLElement[] | NodeList) => void;
// }

// const useStore = create<Store>((set) => ({
//     animItems: [],
//     onGlobalPropChange: 'animate__bounceInLeft',
//     animOnScroll: (onGlobalPropChange: string, animItems: HTMLElement[] | NodeList) => {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem: any = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart
//             }

//             if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add(onGlobalPropChange);
//             } else {
//                 animItem.classList.remove(onGlobalPropChange);
//             }

//         }
//     },
// }));

// function MyComponent() {
//     const { animItems, onGlobalPropChange, animOnScroll } = useStore();

//     useEffect(() => {
//         const newAnimItems = document.querySelectorAll('.anim-items');

//         if (newAnimItems.length > 0) {
//             useStore.setState({ animItems: newAnimItems });
//         }

//         window.addEventListener('scroll', () => { // Создаем анонимную функцию
//             if (animItems.length > 0) {
//                 animOnScroll(onGlobalPropChange, animItems);
//             }
//         });

//         return () => window.removeEventListener('scroll', () => {
//             animOnScroll(onGlobalPropChange, animItems); // Вызываем animOnScroll с нужными аргументами
//         });
//     }, []);
// };

// function offset(el: any): { top: number; left: number } {
//     const rect = el.getBoundingClientRect(),
//         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//         scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }


// async function getServerSideProps() {
//     MyComponent();
// }

// export { MyComponent, useStore }








