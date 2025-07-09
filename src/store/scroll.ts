import { create } from 'zustand';

const useScroller = create(() => ({
    setElement: (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },

    explore: () => {
        const ele = document.getElementById('section2');
        ele?.scrollIntoView({ behavior: 'smooth' });
    }
}));

export default useScroller;