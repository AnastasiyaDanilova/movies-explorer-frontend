export const firstMoviesQuantity = (width) => {
    if (width >= 940) {
        return 12;
    }
    if (width >= 600) {
        return 8;
    }
    else {
        return 5;
    }
}

export const moreFilmsQuantity = (width) => {
    if (width >= 940) {
        return 3;
    }
    return 2;
}