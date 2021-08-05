export const responsive = {
    xl: {
        breakpoint: {min: 1920},
        items: 5
    },
    lg: {
        breakpoint: {max: 1919, min: 1280},
        items: 4
    },
    md: {
        breakpoint: {max: 1279, min: 960},
        items: 3
    },
    sm: {
        breakpoint: {max: 959, min: 600},
        items: 2
    },
    xs: {
        breakpoint: {max: 599, min: 0},
        items: 1
    }
};

export const getInitials = name => {
    if (name !== "") {
        const names = name.split(" ");
        if (names.length === 1)
            return name[0];
        else if (name.length === 2)
            return `${names[0][0]}${names[1][0]}`;
        else return `${names[0][0]}${names[1][0]}`;
    }
    return 'A';
}